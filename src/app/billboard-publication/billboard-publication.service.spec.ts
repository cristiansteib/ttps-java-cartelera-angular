import { TestBed } from '@angular/core/testing';

import { BillboardPublicationService } from './billboard-publication.service';

describe('BillboardPublicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillboardPublicationService = TestBed.get(BillboardPublicationService);
    expect(service).toBeTruthy();
  });
});
