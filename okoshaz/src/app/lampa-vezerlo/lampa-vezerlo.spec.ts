import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampaVezerlo } from './lampa-vezerlo';

describe('LampaVezerlo', () => {
  let component: LampaVezerlo;
  let fixture: ComponentFixture<LampaVezerlo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LampaVezerlo],
    }).compileComponents();

    fixture = TestBed.createComponent(LampaVezerlo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
