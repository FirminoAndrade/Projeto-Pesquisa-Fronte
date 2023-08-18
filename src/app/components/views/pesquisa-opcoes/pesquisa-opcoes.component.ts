import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPesquisa } from 'src/app/models/pesquisa.modelo';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa-opcoes',
  templateUrl: './pesquisa-opcoes.component.html',
  styleUrls: ['./pesquisa-opcoes.component.css']
})
export class PesquisaOpcoesComponent implements OnInit {

  displayedColumns: string[] = [
    'nomeCidade',
    'tipoPesquisa',
    'estado',
    'candidato1',
    'candidato2',
    'candidato3',
    'candidato4',
    'acoes',
  ];

  dataSource!: MatTableDataSource<IPesquisa>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PesquisaService, private router: Router) {
    this.service.listarPesquisaService().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }
  public ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public navegarParaUsuarioCreate() {
    this.router.navigate(['/pesquisa/create']);
  }
}
