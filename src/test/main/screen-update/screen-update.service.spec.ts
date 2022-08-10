import { TestBed } from '@angular/core/testing';

import { ScreenUpdateService } from '@app/main/screen-update/container/screen-update.service';

describe('ScreenUpdateService', () => {
  let service: ScreenUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
