import { TestBed } from '@angular/core/testing';

import { CrmcontactrefundService } from './crmcontactrefund.service';

describe('CrmcontactrefundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmcontactrefundService = TestBed.get(CrmcontactrefundService);
    expect(service).toBeTruthy();
  });
});
