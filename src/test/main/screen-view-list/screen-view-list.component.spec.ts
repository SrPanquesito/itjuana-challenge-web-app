import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenViewListComponent } from '@app/main/screen-view-list/container/screen-view-list.component';

describe('ScreenViewListComponent', () => {
  let component: ScreenViewListComponent;
  let fixture: ComponentFixture<ScreenViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
