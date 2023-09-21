import { OnlineOfflineService } from './online-offline.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IFormulario } from '../models/formulario.modelo';

const url = 'https://pesquisa-java-9ade5eb10d42.herokuapp.com/api/';

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
    return this.http.get(url + 'formulario');
  }

  public listarFormulariosPorIdPesquisaService(id_pesquisa: string): Observable<any> {
    return this.http.get<any>(url + 'formulario?pesquisa=' + id_pesquisa);
  }

  public criarFormularioService(id_pesquisa: string, formulario: IFormulario) {
    if(this.OnlineOfflineService.isOnline) {
     this.http.post(url + 'formulario?pesquisa=' + id_pesquisa, formulario).subscribe( ()=> alert('salvo com sucesso'), () => console.log('opa'));
    }else {
    console.log('savar no banco local');
    }
  }
  public buscarPorId(id: string): Observable<IFormulario> {
    return this.http.get<IFormulario>(url + 'formulario/' + id);
  }

  public updateFormularioService(formulario: IFormulario) {
    return this.http.put(url + 'formulario/' + formulario.id, formulario);
  }

  public deleteFormularioService(id: string): Observable<any> {
    return this.http.delete(url + 'formulario/' + id);
  }

  public quantidadeVotosNull(id_pesquisa: string): Observable<any> {
    return this.http.get(url + 'formulario/null/' + id_pesquisa);
  }

  public quantidadeTotalDeVotos(): Observable<any> {
    return this.http.get(url + 'formulario/total');
  }

  public quantidadeVotosPorCandidato(id_pesquisa: string, nomeCandidato: string): Observable<any> {
    return this.http.get(url + 'formulario/votosCandidato/' + id_pesquisa + '/' + nomeCandidato);
  }

  public quantidadeVotosPorPesquisa(pesquisa: string): Observable<any> {
    return this.http.get(url + 'formulario/votosPesquisa/' + pesquisa);
  }

  public quantidadeVotosPorQualificacaoPresidente(id_pesquisa: string,qualificacao: string): Observable<any> {
    return this.http.get(url + 'formulario/qualificacaoPresidente/' + id_pesquisa + '/' + qualificacao);
  }

  public quantidadeVotosPorQualificacaoGovernador(id_pesquisa: string, qualificacao: string): Observable<any> {
    return this.http.get(url + 'formulario/qualificacaoGovernador/' + id_pesquisa + '/' + qualificacao);
  }

  public quantidadeVotosPorQualificacaoPrefeito(id_pesquisa: string, qualificacao: string): Observable<any> {
    return this.http.get(url + 'formulario/qualificacaoPrefeito/' + id_pesquisa + '/' + qualificacao);
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
