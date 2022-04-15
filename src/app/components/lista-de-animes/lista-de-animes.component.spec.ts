import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAnimesComponent } from './lista-de-animes.component';

describe('ListaDeAnimesComponent', () => {
  let component: ListaDeAnimesComponent;
  let fixture: ComponentFixture<ListaDeAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
