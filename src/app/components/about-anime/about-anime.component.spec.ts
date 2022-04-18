import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAnimeComponent } from './about-anime.component';

describe('AboutAnimeComponent', () => {
  let component: AboutAnimeComponent;
  let fixture: ComponentFixture<AboutAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
