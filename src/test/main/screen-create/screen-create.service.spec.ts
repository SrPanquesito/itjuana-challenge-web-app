import { TestBed } from '@angular/core/testing';

import { ScreenCreateService } from '@app/main/screen-create/container/screen-create.service';

describe('ScreenCreateService', () => {
  let service: ScreenCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
