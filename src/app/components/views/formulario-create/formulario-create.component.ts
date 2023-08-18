import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISatisfacao } from 'src/app/models/satisfacao.model';
import { IFormulario } from 'src/app/models/formulario.modelo';
import { IGenero } from 'src/app/models/genero.modelo';
import { INivelEnsino } from 'src/app/models/nivelEnsino.modelo';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { IRenda } from 'src/app/models/renda.modelo';
import { FormularioService } from 'src/app/services/formulario.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.css'],
})
export class FormularioCreateComponent implements OnInit {
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

  tipoGenero: IGenero[] = [
    { valor: 'Masculino' },
    { valor: 'Feminino' },
    { valor: 'Prefiro não dizer' },
    { valor: 'Outros' },
  ];

  nivelEnsino: INivelEnsino[] = [
    { valor: 'Analfabeto' },
    { valor: 'Até 5º Ano Completo' },
    { valor: '6º ao 9º Ano do Fundamental' },
    { valor: 'Fundamental Completo' },
    { valor: 'Médio Incompleto' },
    { valor: 'Médio Completo' },
    { valor: 'Superior Incompleto' },
    { valor: 'Superior Completo	' },
  ];

  renda: IRenda[] = [
    { valor: 'Classe Alta' },
    { valor: 'Classe Média Alta' },
    { valor: 'Classe Média' },
    { valor: 'Classe Média Baixa' },
    { valor: 'Classe Baixa' },
  ];

  satisfacao: ISatisfacao[] = [
    {valor: 'Pessimo'},
    {valor: 'Ruim'},
    {valor: 'Regular'},
    {valor: 'Otimo'},
  ];

  pesquisa: IPesquisa = {
    nomeCidade: '',
    estado: '',
    tipoPesquisa: '',
    candidato1: '',
    candidato2: '',
    candidato3: '',
    candidato4: ''
  };

  votoBranco = null;

  id_pesquisa: string = '';
  data = new Date();
  dia = String(this.data.getDate()).padStart(2, '0');
  mes = String(this.data.getMonth() + 1).padStart(2, '0');
  ano = this.data.getFullYear();
  dataAtual = `${this.dia}/${this.mes}/${this.ano}`;
  dataConvertida: string = String(this.dataAtual);

  constructor(
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute,
    private servicePesquisa: PesquisaService
  ) {}

  ngOnInit(): void {
    this.id_pesquisa = this.route.snapshot.paramMap.get('id')!;
    this.pesquisa.nomeCidade = this.route.snapshot.paramMap.get('nomeCidade')!;
    this.formulario.data = this.dataConvertida;
    this.buscarPesquisa();
  }

  public buscarPesquisa() {
    this.servicePesquisa.buscarPorId(this.id_pesquisa).subscribe((resposta) => {
      this.formulario.cidade = resposta.nomeCidade;
      this.pesquisa = resposta;
    });
  }

  public criarFormulario(): void {
    this.formulario.cidade = this.pesquisa.nomeCidade;
    this.formulario.data = this.dataConvertida;
    this.service.criarFormularioService(this.id_pesquisa, this.formulario);
    this.router.navigate(['/lista/' + this.id_pesquisa]);
  }

  public navegarParaListaFormularios() {
    this.router.navigate(['/lista/' + this.id_pesquisa]);
  }
}
