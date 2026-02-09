import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yokoi } from './yokoi';

describe('Yokoi', () => {
  let component: Yokoi;
  let fixture: ComponentFixture<Yokoi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yokoi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yokoi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
