import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDarkmodeButtonComponent } from '@app/shared/ui/ui-darkmode-button/ui-darkmode-button.component';

describe('UiDarkmodeButtonComponent', () => {
  let component: UiDarkmodeButtonComponent;
  let fixture: ComponentFixture<UiDarkmodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDarkmodeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDarkmodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
