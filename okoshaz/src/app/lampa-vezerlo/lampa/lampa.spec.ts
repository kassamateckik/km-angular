import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lampa } from './lampa';

describe('Lampa', () => {
  let component: Lampa;
  let fixture: ComponentFixture<Lampa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lampa],
    }).compileComponents();

    fixture = TestBed.createComponent(Lampa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
