import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/usuario.modelo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';

const url = environment.URLPROD

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario!: IUsuario;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarUsuariosService(): Observable<any> {
    return this.http.get(url + 'usuario');
  }

  public criarUsuarioService(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(url + 'usuario', usuario);
  }

  public buscarPorId(id: String): Observable<IUsuario> {
    return this.http.get<IUsuario>(url + 'usuario/' + id);
  }

  public buscarPorEmail(email: String): Observable<IUsuario> {
    return this.http.get<IUsuario>(url + 'usuario/email/' + email);
  }

  public updateUsuarioService(usuario: IUsuario) {
    return this.http.put(url + 'usuario/' + usuario.id, usuario);
  }

  public deleteUsuarioService(id: String): Observable<any> {
    return this.http.delete(url + 'usuario/' + id);
  }

  public validarSenha(email: string, senha: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(
      url + 'usuario/validarSenha?email=' + email + '&senha=' + senha
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
