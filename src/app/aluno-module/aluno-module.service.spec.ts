import { TestBed } from '@angular/core/testing';

import { AlunoModuleService } from './aluno-module.service';

describe('AlunoModuleService', () => {
  let service: AlunoModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
