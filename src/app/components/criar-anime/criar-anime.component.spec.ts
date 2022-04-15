import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnimeComponent } from './criar-anime.component';

describe('CriarAnimeComponent', () => {
  let component: CriarAnimeComponent;
  let fixture: ComponentFixture<CriarAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
