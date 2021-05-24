import { TestBed } from '@angular/core/testing';

import { MatriculaModuleService } from './matricula-module.service';

describe('MatriculaModuleService', () => {
  let service: MatriculaModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
