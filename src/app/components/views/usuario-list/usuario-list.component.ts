import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'nome',
    'tipoPerfil',
    'telefone',
    'email',
    'acoes',
  ];

  dataSource!: MatTableDataSource<IUsuario>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: UsuarioService, private router: Router) {
    this.service.listarUsuariosService().subscribe((resposta) => {
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
    this.router.navigate(['/usuario/create']);
  }
}
