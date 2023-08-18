import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { IFormulario } from 'src/app/models/formulario.modelo';
import { FormularioService } from 'src/app/services/formulario.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css']
})
export class FormularioListComponent implements OnInit {

  displayedColumns: string[] = [
    "id",
    "formulario"
  ];
  formularios: IFormulario[] = [];
  nomeCidade: string = "";
  id_pesquisa: string = "";
  qtdFormularios: any;
  dataSource!: MatTableDataSource<IFormulario>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceFormulario: FormularioService,private servicePesquisa: PesquisaService, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id_pesquisa = this.route.snapshot.paramMap.get("id")!
    this.nomeCidade = this.route.snapshot.paramMap.get("nomeCidade")!
    this.listarFormularios();
    }

  public listarFormularios() {
    this.serviceFormulario.listarFormulariosPorIdPesquisaService(this.id_pesquisa).subscribe((resposta) => {
      this.formularios = resposta;
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    this.servicePesquisa.buscarPorId(this.id_pesquisa).subscribe((reposta) => {
      this.nomeCidade = reposta.nomeCidade;
    this.serviceFormulario.quantidadeVotosPorPesquisa(this.nomeCidade).subscribe((resposta) => {
      this.qtdFormularios = resposta;
   });
  });
 });
}

  public navegarParaNovoFormulario() {
    this.router.navigate(["formulario/create/"+ this.id_pesquisa]);
  }

  public navegarParaDadosPesquisa() {
    this.router.navigate(["/dados/"+ this.id_pesquisa]);
  }
}
