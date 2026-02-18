import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opinion2 } from './opinion2';

describe('Opinion2', () => {
  let component: Opinion2;
  let fixture: ComponentFixture<Opinion2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opinion2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opinion2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
