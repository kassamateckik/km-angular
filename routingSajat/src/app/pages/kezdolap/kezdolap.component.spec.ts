import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KezdolapComponent } from './kezdolap.component';

describe('KezdolapComponent', () => {
  let component: KezdolapComponent;
  let fixture: ComponentFixture<KezdolapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KezdolapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KezdolapComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
