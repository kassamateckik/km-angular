import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HulyevagyComponent } from './hulyevagy.component';

describe('HulyevagyComponent', () => {
  let component: HulyevagyComponent;
  let fixture: ComponentFixture<HulyevagyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HulyevagyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HulyevagyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
