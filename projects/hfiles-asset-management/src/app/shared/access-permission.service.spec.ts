import { TestBed } from '@angular/core/testing';

import { AccessPermissionService } from './access-permission.service';

describe('AccessPermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessPermissionService = TestBed.get(AccessPermissionService);
    expect(service).toBeTruthy();
  });
});
