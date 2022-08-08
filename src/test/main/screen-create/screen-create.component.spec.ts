import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCreateComponent } from '@app/main/screen-create/container/screen-create.component';

describe('ScreenCreateComponent', () => {
  let component: ScreenCreateComponent;
  let fixture: ComponentFixture<ScreenCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
