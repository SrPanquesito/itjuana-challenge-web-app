import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUpdateComponent } from '@app/main/screen-update/container/screen-update.component';

describe('ScreenUpdateComponent', () => {
  let component: ScreenUpdateComponent;
  let fixture: ComponentFixture<ScreenUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
