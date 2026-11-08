import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerTerminalComponent } from './hacker-terminal.component';

describe('HackerTerminalComponent', () => {
  let component: HackerTerminalComponent;
  let fixture: ComponentFixture<HackerTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackerTerminalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HackerTerminalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
