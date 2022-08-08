import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormInputComponent } from '@app/shared/components/custom-form/custom-form-input/custom-form-input.component';

describe('CustomFormInputComponent', () => {
  let component: CustomFormInputComponent;
  let fixture: ComponentFixture<CustomFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
