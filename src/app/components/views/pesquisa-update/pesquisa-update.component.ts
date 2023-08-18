import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa-update',
  templateUrl: './pesquisa-update.component.html',
  styleUrls: ['./pesquisa-update.component.css']
})
export class PesquisaUpdateComponent {

  pesquisa: IPesquisa = {
    nomeCidade: '',
    estado: '',
    tipoPesquisa: '',
    candidato1: '',
    candidato2: '',
    candidato3: '',
    candidato4: ''
  };

  constructor(
    private service: PesquisaService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.pesquisa.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.pesquisa.id!).subscribe((resposta) => {
      this.pesquisa.nomeCidade = resposta.nomeCidade;
      this.pesquisa.estado = resposta.estado;
      this.pesquisa.tipoPesquisa = resposta.tipoPesquisa;
      this.pesquisa.candidato1 = resposta.candidato1;
      this.pesquisa.candidato2 = resposta.candidato2;
      this.pesquisa.candidato3 = resposta.candidato3;
      this.pesquisa.candidato4 = resposta.candidato4;
    });
  }

  public atualizarPesquisa(): void {
     this.service.updatePesquisaService(this.pesquisa).subscribe((resposta) => {
      this.router.navigate(["/pesquisa"]);
      this.service.mensagem("Pesquisa atualizada com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public navegarParaListaPesquisas(){
    this.router.navigate(["/pesquisa"]);
  }
}
