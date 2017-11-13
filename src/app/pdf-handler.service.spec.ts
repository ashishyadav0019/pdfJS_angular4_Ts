import { TestBed, inject } from '@angular/core/testing';

import { PdfHandlerService } from './pdf-handler.service';

describe('PdfHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfHandlerService]
    });
  });

  it('should be created', inject([PdfHandlerService], (service: PdfHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
