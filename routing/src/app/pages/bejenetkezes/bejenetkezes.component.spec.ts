import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BejenetkezesComponent } from './bejenetkezes.component';

describe('BejenetkezesComponent', () => {
  let component: BejenetkezesComponent;
  let fixture: ComponentFixture<BejenetkezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BejenetkezesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BejenetkezesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
