import { OnlineOfflineService } from './online-offline.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IFormulario } from '../models/formulario.modelo';
import { environment } from 'src/environments/environment.prod';

const URL = environment.URLPROD

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar,
    private OnlineOfflineService: OnlineOfflineService
  ) {
    this.ouvirStatusConexao();
  }

  public listarFormulariosService(): Observable<any> {
    return this.http.get(URL + 'formulario');
  }

  public listarFormulariosPorIdPesquisaService(id_pesquisa: string): Observable<any> {
    return this.http.get<any>(URL + 'formulario?pesquisa=' + id_pesquisa);
  }

  public criarFormularioService(id_pesquisa: string, formulario: IFormulario) {
    if(this.OnlineOfflineService.isOnline) {
     this.http.post(URL + 'formulario?pesquisa=' + id_pesquisa, formulario);
    }else {
    console.log('savar no banco local');
    }
  }
  public buscarPorId(id: string): Observable<IFormulario> {
    return this.http.get<IFormulario>(URL + 'formulario/' + id);
  }

  public updateFormularioService(formulario: IFormulario) {
    return this.http.put(URL + 'formulario/' + formulario.id, formulario);
  }

  public deleteFormularioService(id: string): Observable<any> {
    return this.http.delete(URL + 'formulario/' + id);
  }

  public quantidadeVotosNull(id_pesquisa: string): Observable<any> {
    return this.http.get(URL + 'formulario/null/' + id_pesquisa);
  }

  public quantidadeTotalDeVotos(): Observable<any> {
    return this.http.get(URL + 'formulario/total');
  }

  public quantidadeVotosPorCandidato(id_pesquisa: string, nomeCandidato: string): Observable<any> {
    return this.http.get(URL + 'formulario/votos/candidato/' + id_pesquisa + '/' + nomeCandidato);
  }

  public quantidadeVotosPorPesquisa(pesquisa: string): Observable<any> {
    return this.http.get(URL + 'formulario/votos/pesquisa/' + pesquisa);
  }

  public quantidadeVotosPorQualificacaoPresidente(id_pesquisa: string,qualificacao: string): Observable<any> {
    return this.http.get(URL + 'formulario/qualificacao/presidente/' + id_pesquisa + '/' + qualificacao);
  }

  public quantidadeVotosPorQualificacaoGovernador(id_pesquisa: string, qualificacao: string): Observable<any> {
    return this.http.get(URL + 'formulario/qualificacao/governador/' + id_pesquisa + '/' + qualificacao);
  }

  public quantidadeVotosPorQualificacaoPrefeito(id_pesquisa: string, qualificacao: string): Observable<any> {
    return this.http.get(URL + 'formulario/qualificacao/prefeito/' + id_pesquisa + '/' + qualificacao);
  }

  private ouvirStatusConexao() {
    this.OnlineOfflineService.statusConexao.subscribe((online) => {
      if (online) {
        console.log('enviando dados do banco local para API');
      } else {
        console.log('estou offline');
      }
    });
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
