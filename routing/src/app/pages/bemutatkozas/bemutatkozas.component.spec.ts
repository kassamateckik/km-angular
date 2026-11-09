import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BemutatkozasComponent } from './bemutatkozas.component';

describe('BemutatkozasComponent', () => {
  let component: BemutatkozasComponent;
  let fixture: ComponentFixture<BemutatkozasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BemutatkozasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BemutatkozasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
