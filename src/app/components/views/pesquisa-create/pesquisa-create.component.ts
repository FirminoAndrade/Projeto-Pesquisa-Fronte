import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa-create',
  templateUrl: './pesquisa-create.component.html',
  styleUrls: ['./pesquisa-create.component.css']
})
export class PesquisaCreateComponent implements OnInit{

  pesquisa: IPesquisa = {
    nomeCidade: '',
    estado: '',
    tipoPesquisa: '',
    candidato1: '',
    candidato2: '',
    candidato3: '',
    candidato4: ''
  };

  constructor(private service: PesquisaService, private router: Router) {}

  ngOnInit(): void {}

  public criarPesquisa(): void {
    this.service.criarPesquisaService(this.pesquisa).subscribe(
      (resposta) => {
        this.router.navigate(['/home']);
        this.service.mensagem("Pesquisa adicionado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public navegarParaListaPesquisas() {
    this.router.navigate(['/pesquisa']);
  }
}
