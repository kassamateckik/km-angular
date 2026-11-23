import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BejelentkezveComponent } from './bejelentkezve.component';

describe('BejelentkezveComponent', () => {
  let component: BejelentkezveComponent;
  let fixture: ComponentFixture<BejelentkezveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BejelentkezveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BejelentkezveComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
