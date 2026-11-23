import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BejenetkezveComponent } from './bejenetkezve.component';

describe('BejenetkezveComponent', () => {
  let component: BejenetkezveComponent;
  let fixture: ComponentFixture<BejenetkezveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BejenetkezveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BejenetkezveComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
