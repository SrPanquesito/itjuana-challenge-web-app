import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDarkmodeButtonComponent } from './ui/ui-darkmode-button/ui-darkmode-button.component';
import { BlockTypingDirective } from './directives/block-typing.directive';
import { UppercaseLetterPipe } from './pipes/uppercase-letter.pipe';

@NgModule({
  declarations: [
    UiDarkmodeButtonComponent,
    BlockTypingDirective,
    UppercaseLetterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiDarkmodeButtonComponent,
    BlockTypingDirective,
    UppercaseLetterPipe,
  ]
})
export class SharedModule { }
