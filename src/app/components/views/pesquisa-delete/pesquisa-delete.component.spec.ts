import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaDeleteComponent } from './pesquisa-delete.component';

describe('PesquisaDeleteComponent', () => {
  let component: PesquisaDeleteComponent;
  let fixture: ComponentFixture<PesquisaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaDeleteComponent]
    });
    fixture = TestBed.createComponent(PesquisaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
