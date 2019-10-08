import { TestBed } from '@angular/core/testing';

import { GeneralPermissionService } from './general-permission.service';

describe('GeneralPermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralPermissionService = TestBed.get(GeneralPermissionService);
    expect(service).toBeTruthy();
  });
});
