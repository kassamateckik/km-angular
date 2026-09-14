import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idozona } from './idozona';

describe('Idozona', () => {
  let component: Idozona;
  let fixture: ComponentFixture<Idozona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idozona],
    }).compileComponents();

    fixture = TestBed.createComponent(Idozona);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
