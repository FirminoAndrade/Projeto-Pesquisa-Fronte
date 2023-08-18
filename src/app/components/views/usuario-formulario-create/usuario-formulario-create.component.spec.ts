import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormularioCreateComponent } from './usuario-formulario-create.component';

describe('UsuarioFormularioCreateComponent', () => {
  let component: UsuarioFormularioCreateComponent;
  let fixture: ComponentFixture<UsuarioFormularioCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioFormularioCreateComponent]
    });
    fixture = TestBed.createComponent(UsuarioFormularioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
