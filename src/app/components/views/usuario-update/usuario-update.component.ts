import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoPerfil } from 'src/app/models/tipoPerfil.modelo';
import { IUsuario } from 'src/app/models/usuario.modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: IUsuario = {
    nome: "",
    tipoPerfil: "",
    telefone: "",
    email: "",
    senha: ""
    };

  tipos: TipoPerfil[] = [
    {valor: 'ADMINISTRADOR', viewValor: 'ADMINISTRADOR'},
    {valor: 'USUARIO', viewValor: 'USUARIO'},

  ];

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.usuario.id!).subscribe((resposta) => {
      this.usuario.nome = resposta.nome;
      this.usuario.tipoPerfil = resposta.tipoPerfil;
      this.usuario.telefone = resposta.telefone;
      this.usuario.email = resposta.email;
      this.usuario.senha = resposta.senha;
    });
  }

  public atualizarUsuario(): void {
     this.service.updateUsuarioService(this.usuario).subscribe((resposta) => {
      this.router.navigate(["/usuario"]);
      this.service.mensagem("Cadastro atualizado com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public navegarParaListaUsuarios(){
    this.router.navigate(["/usuario"]);
  }
}
