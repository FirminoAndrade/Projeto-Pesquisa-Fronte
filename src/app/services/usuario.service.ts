import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/usuario.modelo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';

const URL = environment.URLPROD

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario!: IUsuario;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarUsuariosService(): Observable<any> {
    return this.http.get(URL + 'usuario');
  }

  public criarUsuarioService(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(URL + 'usuario', usuario);
  }

  public buscarPorId(id: String): Observable<IUsuario> {
    return this.http.get<IUsuario>(URL + 'usuario/' + id);
  }

  public buscarPorEmail(email: String): Observable<IUsuario> {
    return this.http.get<IUsuario>(URL + 'usuario/email/' + email);
  }

  public updateUsuarioService(usuario: IUsuario) {
    return this.http.put(URL + 'usuario/' + usuario.id, usuario);
  }

  public deleteUsuarioService(id: String): Observable<any> {
    return this.http.delete(URL + 'usuario/' + id);
  }

  public validarSenha(email: string, senha: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(
      URL + 'usuario/validarSenha?email=' + email + '&senha=' + senha
    );
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
