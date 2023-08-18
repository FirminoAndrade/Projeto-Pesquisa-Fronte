import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioListComponent } from './formulario-list.component';

describe('FormularioListComponent', () => {
  let component: FormularioListComponent;
  let fixture: ComponentFixture<FormularioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioListComponent]
    });
    fixture = TestBed.createComponent(FormularioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
