import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoszorkanyKonyhaComponent } from './boszorkany-konyha.component';

describe('BoszorkanyKonyhaComponent', () => {
  let component: BoszorkanyKonyhaComponent;
  let fixture: ComponentFixture<BoszorkanyKonyhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoszorkanyKonyhaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoszorkanyKonyhaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
