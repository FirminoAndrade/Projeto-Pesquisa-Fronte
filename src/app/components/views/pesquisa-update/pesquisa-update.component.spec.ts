import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaUpdateComponent } from './pesquisa-update.component';

describe('PesquisaUpdateComponent', () => {
  let component: PesquisaUpdateComponent;
  let fixture: ComponentFixture<PesquisaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaUpdateComponent]
    });
    fixture = TestBed.createComponent(PesquisaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
