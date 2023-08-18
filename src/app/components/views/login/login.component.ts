import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.modelo';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email!: string;
  senha!: string;
  usuario!: IUsuario;
  private token: any;

  constructor(private router: Router, public service: UsuarioService) {}

  ngOnInit(): void {}

  submitLogin() {
    this.service.validarSenha(this.email, this.senha).subscribe({
      next: (resposta) => {
        this.token = resposta;
        if (this.token === true) {
          this.service.buscarPorEmail(this.email).subscribe({
            next: (resposta) => {
              this.usuario = resposta;
              this.service.usuario = resposta;
              if (resposta != null) {
                if (this.usuario.tipoPerfil === 'ADMINISTRADOR') {
                  this.router.navigate(['/home']);
                } else if (this.usuario.tipoPerfil === 'USUARIO') {
                  this.router.navigate(['/home/usuario']);
                }
              }
            },
            error: (err) => {},
          });
        }
      },
      error: (err) => {
        this.service.mensagem(
          'Usuário não encontrado E-mail ou Senha incorreto!'
        );
      },
    });
  }
}
