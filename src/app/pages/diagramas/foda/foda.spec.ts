import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foda } from './foda';

describe('Foda', () => {
  let component: Foda;
  let fixture: ComponentFixture<Foda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
