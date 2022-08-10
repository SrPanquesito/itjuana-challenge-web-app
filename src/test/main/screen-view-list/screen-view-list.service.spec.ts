import { TestBed } from '@angular/core/testing';

import { ScreenViewListService } from '@app/main/screen-view-list/container/screen-view-list.service';

describe('ScreenViewListService', () => {
  let service: ScreenViewListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenViewListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
