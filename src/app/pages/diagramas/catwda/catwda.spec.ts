import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catwda } from './catwda';

describe('Catwda', () => {
  let component: Catwda;
  let fixture: ComponentFixture<Catwda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catwda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catwda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
