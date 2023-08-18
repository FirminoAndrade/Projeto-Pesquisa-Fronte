import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPesquisaComponent } from './dados-pesquisa.component';

describe('DadosPesquisaComponent', () => {
  let component: DadosPesquisaComponent;
  let fixture: ComponentFixture<DadosPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPesquisaComponent]
    });
    fixture = TestBed.createComponent(DadosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
