import { TestBed } from '@angular/core/testing';

import { VwCrmRefundMstBankService } from './vw-crm-refund-mst-bank.service';

describe('VwCrmRefundMstBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VwCrmRefundMstBankService = TestBed.get(VwCrmRefundMstBankService);
    expect(service).toBeTruthy();
  });
});
