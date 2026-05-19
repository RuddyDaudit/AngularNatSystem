import { TestBed } from '@angular/core/testing';

import { PersonnesCrud } from './personnes.crud';

describe('PersonnesCrud', () => {
  let service: PersonnesCrud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnesCrud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
