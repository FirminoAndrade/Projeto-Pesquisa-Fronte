import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.css']
})
export class HeaderUsuarioComponent implements OnInit {

  private id ='';
  nome: string = '';

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '';
    this.buscarNome();
  }

  buscarNome(): void {
    this.service.buscarPorId(this.id).subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
