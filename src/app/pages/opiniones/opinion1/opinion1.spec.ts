import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opinion1 } from './opinion1';

describe('Opinion1', () => {
  let component: Opinion1;
  let fixture: ComponentFixture<Opinion1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opinion1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opinion1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
