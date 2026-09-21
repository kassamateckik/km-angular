import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonazoComponent } from './zonazo.component';

describe('ZonazoComponent', () => {
  let component: ZonazoComponent;
  let fixture: ComponentFixture<ZonazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonazoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZonazoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
