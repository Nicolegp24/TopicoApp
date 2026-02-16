import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sombreros } from './sombreros';

describe('Sombreros', () => {
  let component: Sombreros;
  let fixture: ComponentFixture<Sombreros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sombreros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sombreros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

