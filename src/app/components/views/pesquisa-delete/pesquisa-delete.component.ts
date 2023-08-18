import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa-delete',
  templateUrl: './pesquisa-delete.component.html',
  styleUrls: ['./pesquisa-delete.component.css']
})
export class PesquisaDeleteComponent implements OnInit{

  pesquisa: IPesquisa = {
    nomeCidade: '',
    estado: '',
    tipoPesquisa: '',
    candidato1: '',
    candidato2: '',
    candidato3: '',
    candidato4: ''
  };

  constructor(private service: PesquisaService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
   this.pesquisa.id = this.route.snapshot.paramMap.get("id")!;
   this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.pesquisa.id!).subscribe((resposta) => {
      this.pesquisa = resposta;
    })
  }

  public deletarPesquisa(): void {
    this.service.deletePesquisaService(this.pesquisa.id!).subscribe((reposta) => {
      this.router.navigate(["/pesquisa"])
      this.service.mensagem("Pesquisa apagado com sucesso!")
    },
    (err) => {

      }
    )
  }

   public navegarParaListaPesquisas(){
    this.router.navigate(["/pesquisa"])
  }
}
