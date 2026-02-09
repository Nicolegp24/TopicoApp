import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kasuga } from './kasuga';

describe('Kasuga', () => {
  let component: Kasuga;
  let fixture: ComponentFixture<Kasuga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kasuga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kasuga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
