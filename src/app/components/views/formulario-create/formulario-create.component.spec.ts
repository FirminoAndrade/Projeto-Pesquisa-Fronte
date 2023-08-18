import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCreateComponent } from './formulario-create.component';

describe('FormularioCreateComponent', () => {
  let component: FormularioCreateComponent;
  let fixture: ComponentFixture<FormularioCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCreateComponent]
    });
    fixture = TestBed.createComponent(FormularioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
