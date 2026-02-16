import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ishikawa } from './ishikawa';

describe('Ishikawa', () => {
  let component: Ishikawa;
  let fixture: ComponentFixture<Ishikawa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ishikawa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ishikawa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
