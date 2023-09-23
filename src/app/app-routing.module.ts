import { UsuarioFormularioCreateComponent } from './components/views/usuario-formulario-create/usuario-formulario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario-delete/usuario-delete.component';
import { LoginComponent } from './components/views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioListComponent } from './components/views/usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './components/views/usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './components/views/usuario-create/usuario-create.component';
import { PesquisaOpcoesComponent } from './components/views/pesquisa-opcoes/pesquisa-opcoes.component';
import { PesquisaCreateComponent } from './components/views/pesquisa-create/pesquisa-create.component';
import { PesquisaUpdateComponent } from './components/views/pesquisa-update/pesquisa-update.component';
import { PesquisaDeleteComponent } from './components/views/pesquisa-delete/pesquisa-delete.component';
import { FormularioListComponent } from './components/views/formulario-list/formulario-list.component';
import { FormularioComponent } from './components/views/formulario/formulario.component';
import { FormularioCreateComponent } from './components/views/formulario-create/formulario-create.component';
import { DadosPesquisaComponent } from './components/views/dados-pesquisa/dados-pesquisa.component';
import { UsuarioHomeComponent } from './components/views/usuario-home/usuario-home.component';
import { CanActiveGuard } from './guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'home/usuario', component: UsuarioHomeComponent },
  { path: 'usuario', component: UsuarioListComponent },
  { path: 'usuario/create', component: UsuarioCreateComponent },
  { path: 'usuario/update/:id', component: UsuarioUpdateComponent },
  { path: 'usuario/delete/:id', component: UsuarioDeleteComponent },
  { path: 'pesquisa', component: PesquisaOpcoesComponent },
  { path: 'pesquisa/create', component: PesquisaCreateComponent },
  { path: 'pesquisa/update/:id', component: PesquisaUpdateComponent },
  { path: 'pesquisa/delete/:id', component: PesquisaDeleteComponent },
  { path: 'lista/:id', component: FormularioListComponent },
  { path: 'formulario/:id', component: FormularioComponent },
  { path: 'formulario/create/:id', component: FormularioCreateComponent },
  { path: 'create/:id', component: UsuarioFormularioCreateComponent },
  { path: 'dados/:id', component: DadosPesquisaComponent, canActivate: [CanActiveGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
