import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevasarloListaComponent } from './bevasarlo-lista.component';

describe('BevasarloListaComponent', () => {
  let component: BevasarloListaComponent;
  let fixture: ComponentFixture<BevasarloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BevasarloListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BevasarloListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
