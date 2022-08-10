import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFloatComponent } from '@app/shared/components/navbar-float/navbar-float.component';

describe('NavbarFloatComponent', () => {
  let component: NavbarFloatComponent;
  let fixture: ComponentFixture<NavbarFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFloatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
