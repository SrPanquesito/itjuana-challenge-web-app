import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiDarkmodeButtonComponent } from './ui/ui-darkmode-button/ui-darkmode-button.component';
import { BlockTypingDirective } from './directives/block-typing.directive';
import { UppercaseLetterPipe } from './pipes/uppercase-letter.pipe';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CustomFormInputComponent } from './components/custom-form/custom-form-input/custom-form-input.component';
import { NavbarFloatComponent } from './components/navbar-float/navbar-float.component';

@NgModule({
  declarations: [
    UiDarkmodeButtonComponent,
    CustomFormComponent,
    CustomFormInputComponent,
    NavbarFloatComponent,
    BlockTypingDirective,
    UppercaseLetterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UiDarkmodeButtonComponent,
    CustomFormComponent,
    NavbarFloatComponent,
    BlockTypingDirective,
    UppercaseLetterPipe,
  ]
})
export class SharedModule { }
