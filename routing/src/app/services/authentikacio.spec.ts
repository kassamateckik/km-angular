import { TestBed } from '@angular/core/testing';
import { Authentikacio } from './authentikacio';

describe('Authentikacio', () => {
  let service: Authentikacio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentikacio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
