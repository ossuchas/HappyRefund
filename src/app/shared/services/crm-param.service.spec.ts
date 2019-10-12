import { TestBed } from '@angular/core/testing';

import { CrmParamService } from './crm-param.service';

describe('CrmParamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmParamService = TestBed.get(CrmParamService);
    expect(service).toBeTruthy();
  });
});
