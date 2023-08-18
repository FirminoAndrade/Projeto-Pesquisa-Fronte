import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pesquisas: IPesquisa[] = [];

  pesquisa!: IPesquisa;

  constructor(private service: PesquisaService, private router: Router) {}

  ngOnInit(): void {
    this.buscarCidades();
  }

  buscarCidades() {
    this.service.listarPesquisaService().subscribe((resposta) => {
      this.pesquisas = resposta;
    });
  }

  buscarPesquisa(id: any) {
    this.service.buscarPorId(id).subscribe((resposta) => {
      this.pesquisa = resposta;
      this.router.navigate(['/lista/'+ resposta.id])
    })
  }
}
