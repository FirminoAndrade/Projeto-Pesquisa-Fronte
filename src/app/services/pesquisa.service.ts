import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IPesquisa } from '../models/pesquisa.modelo';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarPesquisaService(): Observable<any> {
    return this.http.get("http://localhost:8081/api/pesquisa");
  }

  public criarPesquisaService(cidade: IPesquisa): Observable<IPesquisa> {
    return this.http.post<IPesquisa>("http://localhost:8081/api/pesquisa",cidade);
  }

  public buscarPorId(id: string): Observable<IPesquisa>{
    return this.http.get<IPesquisa>("http://localhost:8081/api/pesquisa/"+id);
  }

  public deletePesquisaService(id: string): Observable<any>{
    return this.http.delete("http://localhost:8081/api/pesquisa/"+id);
  }

  public updatePesquisaService(cidade: IPesquisa) {
    const url = "http://localhost:8081/api/pesquisa/";
    return this.http.put(url + cidade.id, cidade);
  }

  public quantidadePesquisas(): Observable<any> {
    return this.http.get("http://localhost:8081/api/pesquisa/quantidade");
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
