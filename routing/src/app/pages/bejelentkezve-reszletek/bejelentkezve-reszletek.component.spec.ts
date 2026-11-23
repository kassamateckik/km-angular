import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BejelentkezveReszletekComponent } from './bejelentkezve-reszletek.component';

describe('BejelentkezveReszletekComponent', () => {
  let component: BejelentkezveReszletekComponent;
  let fixture: ComponentFixture<BejelentkezveReszletekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BejelentkezveReszletekComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BejelentkezveReszletekComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
