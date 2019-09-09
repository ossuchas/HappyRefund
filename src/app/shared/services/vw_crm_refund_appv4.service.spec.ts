import { TestBed } from '@angular/core/testing';

import { VwCrmRefundAppv4Service } from './vw_crm_refund_appv4.service';

describe('VwCrmRefundAppv4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VwCrmRefundAppv4Service = TestBed.get(VwCrmRefundAppv4Service);
    expect(service).toBeTruthy();
  });
});
