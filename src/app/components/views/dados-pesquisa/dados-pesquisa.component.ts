import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { IFormulario } from 'src/app/models/formulario.modelo';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { FormularioService } from 'src/app/services/formulario.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-dados-pesquisa',
  templateUrl: './dados-pesquisa.component.html',
  styleUrls: ['./dados-pesquisa.component.css'],
})
export class DadosPesquisaComponent implements OnInit {
  formulario: IFormulario = {
    nome: '',
    endereco: '',
    bairro: '',
    cidade: '',
    telefone: '',
    data: '',
    genero: '',
    idade: '',
    nivelEnsino: '',
    renda: '',
    opcaoVoto: '',
    aprovacaoPresidente: '',
    aprovacaoGovernador: '',
    aprovacaoPrefeito: '',
  };

  pesquisa: IPesquisa = {
    nomeCidade: '',
    estado: '',
    tipoPesquisa: '',
    candidato1: '',
    candidato2: '',
    candidato3: '',
    candidato4: '',
  };

  id_pesquisa: string = '';
  totalVotos: any;
  candidatoA: any;
  candidatoB: any;
  candidatoC: any;
  candidatoD: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  quantidadeVotoNull!: any;
  porcentagemA: any;
  porcentagemB: any;
  porcentagemC: any;
  porcentagemD: any;
  porcentagemN: any;
  presidenteOtimo: any;
  presidenteRegular: any;
  presidenteRuim: any;
  presidentePessimo: any;
  governadorOtimo: any;
  governadorRegular: any;
  governadorRuim: any;
  governadorPessimo: any;
  prefeitoOtimo: any;
  prefeitoRegular: any;
  prefeitoRuim: any;
  prefeitoPessimo: any;

  constructor(
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute,
    private servicePesquisa: PesquisaService
    ) {}

    ngOnInit(): void {
      this.id_pesquisa = this.route.snapshot.paramMap.get('id')!;
      this.buscarPesquisa();
    }

    public buscarPesquisa(): void {
      const otimo ='Otimo';
      const regular ='Regular';
      const ruim ='Ruim';
      const pessimo ='Pessimo';
      this.servicePesquisa.buscarPorId(this.id_pesquisa).subscribe((resposta) => {
        this.pesquisa.nomeCidade = resposta.nomeCidade;
        this.pesquisa.estado = resposta.estado;
        this.pesquisa.tipoPesquisa = resposta.tipoPesquisa;
        this.pesquisa.candidato1 = resposta.candidato1;
      this.pesquisa.candidato2 = resposta.candidato2;
      this.pesquisa.candidato3 = resposta.candidato3;
      this.pesquisa.candidato4 = resposta.candidato4;
      this.service.quantidadeVotosPorPesquisa(this.pesquisa.nomeCidade).subscribe((resposta) => {
        this.totalVotos = resposta;
      });
      this.service.quantidadeVotosPorCandidato(this.id_pesquisa, this.pesquisa.candidato1).subscribe((resposta) => {
        this.candidatoA = resposta;
        this.porcentagemA = (this.candidatoA * 100) / this.totalVotos;
        this.porcentagemA = this.porcentagemA.toFixed(1)
      });
      this.service.quantidadeVotosPorCandidato(this.id_pesquisa, this.pesquisa.candidato2).subscribe((resposta) => {
        this.candidatoB = resposta;
        this.porcentagemB = (this.candidatoB * 100) / this.totalVotos;
        this.porcentagemB = this.porcentagemB.toFixed(1)
      });
      this.service.quantidadeVotosPorCandidato(this.id_pesquisa, this.pesquisa.candidato3).subscribe((resposta) => {
        this.candidatoC = resposta;
        this.porcentagemC = (this.candidatoC * 100) / this.totalVotos;
        this.porcentagemC = this.porcentagemC.toFixed(1)
      });
      this.service.quantidadeVotosPorCandidato(this.id_pesquisa, this.pesquisa.candidato4).subscribe((resposta) => {
        this.candidatoD = resposta;
        this.porcentagemD = (this.candidatoD * 100) / this.totalVotos;
        this.porcentagemD = this.porcentagemD.toFixed(1)
      });
      this.service.quantidadeVotosNull(this.id_pesquisa).subscribe((resposta) => {
        this.quantidadeVotoNull = resposta;
        this.porcentagemN = (this.quantidadeVotoNull * 100) / this.totalVotos;
        this.porcentagemN = this.porcentagemN.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPresidente(this.id_pesquisa, otimo).subscribe((resposta) => {
        this.presidenteOtimo = resposta;
        this.presidenteOtimo = (this.presidenteOtimo * 100) / this.totalVotos;
        this.presidenteOtimo = this.presidenteOtimo.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPresidente(this.id_pesquisa, regular).subscribe((resposta) => {
        this.presidenteRegular = resposta;
        this.presidenteRegular = (this.presidenteRegular * 100) / this.totalVotos;
        this.presidenteRegular = this.presidenteRegular.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPresidente(this.id_pesquisa, ruim).subscribe((resposta) => {
        this.presidenteRuim = resposta;
        this.presidenteRuim = (this.presidenteRuim * 100) / this.totalVotos;
        this.presidenteRuim = this.presidenteRuim.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPresidente(this.id_pesquisa, pessimo).subscribe((resposta) => {
        this.presidentePessimo = resposta;
        this.presidentePessimo = (this.presidentePessimo * 100) / this.totalVotos;
        this.presidentePessimo = this.presidentePessimo.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoGovernador(this.id_pesquisa, otimo).subscribe((resposta) => {
        this.governadorOtimo = resposta;
        this.governadorOtimo = (this.governadorOtimo * 100) / this.totalVotos;
        this.governadorOtimo = this.governadorOtimo.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoGovernador(this.id_pesquisa, regular).subscribe((resposta) => {
        this.governadorRegular = resposta;
        this.governadorRegular = (this.governadorRegular * 100) / this.totalVotos;
        this.governadorRegular = this.governadorRegular.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoGovernador(this.id_pesquisa, ruim).subscribe((resposta) => {
        this.governadorRuim = resposta;
        this.governadorRuim = (this.governadorRuim * 100) / this.totalVotos;
        this.governadorRuim = this.governadorRuim.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoGovernador(this.id_pesquisa, pessimo).subscribe((resposta) => {
        this.governadorPessimo = resposta;
        this.governadorPessimo = (this.governadorPessimo * 100) / this.totalVotos;
        this.governadorPessimo = this.governadorPessimo.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPrefeito(this.id_pesquisa, otimo).subscribe((resposta) => {
        this.prefeitoOtimo = resposta;
        this.prefeitoOtimo = (this.prefeitoOtimo * 100) / this.totalVotos;
        this.prefeitoOtimo = this.prefeitoOtimo.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPrefeito(this.id_pesquisa, regular).subscribe((resposta) => {
        this.prefeitoRegular = resposta;
        this.prefeitoRegular = (this.prefeitoRegular * 100) / this.totalVotos;
        this.prefeitoRegular = this.prefeitoRegular.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPrefeito(this.id_pesquisa, ruim).subscribe((resposta) => {
        this.prefeitoRuim = resposta;
        this.prefeitoRuim = (this.prefeitoRuim * 100) / this.totalVotos;
        this.prefeitoRuim = this.prefeitoRuim.toFixed(1)
      });
      this.service.quantidadeVotosPorQualificacaoPrefeito(this.id_pesquisa, pessimo).subscribe((resposta) => {
        this.prefeitoPessimo = resposta;
        this.prefeitoPessimo = (this.prefeitoPessimo * 100) / this.totalVotos;
        this.prefeitoPessimo = this.prefeitoPessimo.toFixed(1)
      });
    });
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(['/lista/'+ this.id_pesquisa]);
  }
}
