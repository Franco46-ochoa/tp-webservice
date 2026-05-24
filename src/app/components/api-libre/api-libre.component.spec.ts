import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLibreComponent } from './api-libre.component';

describe('ApiLibreComponent', () => {
  let component: ApiLibreComponent;
  let fixture: ComponentFixture<ApiLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiLibreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiLibreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
