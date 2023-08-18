import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaOpcoesComponent } from './pesquisa-opcoes.component';

describe('PesquisaOpcoesComponent', () => {
  let component: PesquisaOpcoesComponent;
  let fixture: ComponentFixture<PesquisaOpcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaOpcoesComponent]
    });
    fixture = TestBed.createComponent(PesquisaOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
