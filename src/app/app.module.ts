import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FormsModule } from '@angular/forms';
import { UsuarioListComponent } from './components/views/usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './components/views/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/views/usuario-delete/usuario-delete.component';
import { UsuarioCreateComponent } from './components/views/usuario-create/usuario-create.component';
import { PesquisaOpcoesComponent } from './components/views/pesquisa-opcoes/pesquisa-opcoes.component';
import { PesquisaUpdateComponent } from './components/views/pesquisa-update/pesquisa-update.component';
import { PesquisaCreateComponent } from './components/views/pesquisa-create/pesquisa-create.component';
import { PesquisaDeleteComponent } from './components/views/pesquisa-delete/pesquisa-delete.component';
import { FormularioListComponent } from './components/views/formulario-list/formulario-list.component';
import { FormularioComponent } from './components/views/formulario/formulario.component';
import { FormularioCreateComponent } from './components/views/formulario-create/formulario-create.component';
import { DadosPesquisaComponent } from './components/views/dados-pesquisa/dados-pesquisa.component';
import { UsuarioHomeComponent } from './components/views/usuario-home/usuario-home.component';
import { HeaderUsuarioComponent } from './template/header-usuario/header-usuario.component';
import { UsuarioFormularioCreateComponent } from './components/views/usuario-formulario-create/usuario-formulario-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UsuarioListComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UsuarioCreateComponent,
    PesquisaOpcoesComponent,
    PesquisaUpdateComponent,
    PesquisaCreateComponent,
    PesquisaDeleteComponent,
    FormularioListComponent,
    FormularioComponent,
    FormularioCreateComponent,
    DadosPesquisaComponent,
    UsuarioHomeComponent,
    HeaderUsuarioComponent,
    UsuarioFormularioCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
