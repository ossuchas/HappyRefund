import { TestBed } from '@angular/core/testing';

import { VwCrmRefundBanknamelstService } from './vw-crm-refund-banknamelst.service';

describe('VwCrmRefundBanknamelstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VwCrmRefundBanknamelstService = TestBed.get(VwCrmRefundBanknamelstService);
    expect(service).toBeTruthy();
  });
});
