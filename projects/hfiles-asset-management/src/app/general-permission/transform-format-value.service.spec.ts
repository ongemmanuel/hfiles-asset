import { TestBed } from '@angular/core/testing';

import { TransformFormatValueService } from './transform-format-value.service';

describe('TransformFormatValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformFormatValueService = TestBed.get(TransformFormatValueService);
    expect(service).toBeTruthy();
  });
});
