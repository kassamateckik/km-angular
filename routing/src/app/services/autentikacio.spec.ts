import { TestBed } from '@angular/core/testing';
import { Autentikacio } from './autentikacio';

describe('Autentikacio', () => {
  let service: Autentikacio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autentikacio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
