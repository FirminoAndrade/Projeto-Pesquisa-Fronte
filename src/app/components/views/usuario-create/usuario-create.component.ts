import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPerfil } from 'src/app/models/tipoPerfil.modelo';
import { IUsuario } from 'src/app/models/usuario.modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: IUsuario = {
    nome: '',
    tipoPerfil: '',
    email: '',
    senha: '',
    telefone:''
  };

  tipos: TipoPerfil[] = [
    {valor: 'ADMINISTRADOR', viewValor: 'ADMINISTRADOR'},
    {valor: 'USUARIO', viewValor: 'USUARIO'},
];

ConfirmarSenha: any

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  public validarSenha(){
    if (this.ConfirmarSenha === this.usuario.senha){
      this.criarUsuario();
    } else {
      this.service.mensagem('Senha não Autenticada!');
    }
  }

  public criarUsuario(): void {
    this.service.criarUsuarioService(this.usuario).subscribe(
      (resposta) => {
        this.router.navigate(['/usuario']);
        this.service.mensagem("Cadastro adicionado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public navegarParaListaUsuarios() {
    this.router.navigate(['/usuario']);
  }
}
