import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: IUsuario = {
    nome: "",
    tipoPerfil: "",
    telefone: "",
    email: "",
    senha: ""
    };

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
   this.usuario.id = this.route.snapshot.paramMap.get("id")!;
   this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.usuario.id!).subscribe((resposta) => {
      this.usuario = resposta;
    })
  }

  public deletarUsuario(): void {
    this.service.deleteUsuarioService(this.usuario.id!).subscribe((reposta) => {
      this.router.navigate(["/usuario"])
      this.service.mensagem("Cadastro apagado com sucesso!")
    },
    (err) => {

      }
    )
  }

   public navegarParaListaUsuarios(){
    this.router.navigate(["/usuario"])
  }
}
