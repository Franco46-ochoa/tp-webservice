import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPeliculasComponent } from './portal-peliculas.component';

describe('PortalPeliculasComponent', () => {
  let component: PortalPeliculasComponent;
  let fixture: ComponentFixture<PortalPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalPeliculasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalPeliculasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
