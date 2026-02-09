import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mexjap } from './mexjap';

describe('Mexjap', () => {
  let component: Mexjap;
  let fixture: ComponentFixture<Mexjap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mexjap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mexjap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
