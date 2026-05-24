import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDivisasComponent } from './conversor-divisas.component';

describe('ConversorDivisasComponent', () => {
  let component: ConversorDivisasComponent;
  let fixture: ComponentFixture<ConversorDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorDivisasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversorDivisasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
