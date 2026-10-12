import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GladiatorComponent } from './gladiator.component';

describe('GladiatorComponent', () => {
  let component: GladiatorComponent;
  let fixture: ComponentFixture<GladiatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GladiatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GladiatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
