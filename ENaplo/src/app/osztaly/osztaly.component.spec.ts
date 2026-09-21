import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsztalyComponent } from './osztaly.component';

describe('OsztalyComponent', () => {
  let component: OsztalyComponent;
  let fixture: ComponentFixture<OsztalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsztalyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OsztalyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
