import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IPesquisa } from '../models/pesquisa.modelo';
import { environment } from 'src/environments/environment.prod';

const url = environment.URLPROD

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarPesquisaService(): Observable<any> {
    return this.http.get(url + "pesquisa");
  }

  public criarPesquisaService(cidade: IPesquisa): Observable<IPesquisa> {
    return this.http.post<IPesquisa>(url + "pesquisa",cidade);
  }

  public buscarPorId(id: string): Observable<IPesquisa>{
    return this.http.get<IPesquisa>(url + "pesquisa/"+id);
  }

  public deletePesquisaService(id: string): Observable<any>{
    return this.http.delete(url + "pesquisa/"+id);
  }

  public updatePesquisaService(cidade: IPesquisa) {
    return this.http.put(url + "pesquisa/" + cidade.id, cidade);
  }

  public quantidadePesquisas(): Observable<any> {
    return this.http.get(url + "pesquisa/quantidade");
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
