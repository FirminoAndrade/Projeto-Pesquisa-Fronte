
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFormulario } from 'src/app/models/formulario.modelo';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
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


  constructor(private route: ActivatedRoute, private serviceFormulario: FormularioService) {}

  ngOnInit(): void {
    this.formulario.id = this.route.snapshot.paramMap.get('id')!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.serviceFormulario.buscarPorId(this.formulario.id!).subscribe((resposta) => {
      this.formulario = resposta;
   });
  }
}
