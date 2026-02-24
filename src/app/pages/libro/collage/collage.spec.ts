import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collage } from './collage';

describe('Collage', () => {
  let component: Collage;
  let fixture: ComponentFixture<Collage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
