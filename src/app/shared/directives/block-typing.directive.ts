import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlockTyping]'
})
export class BlockTypingDirective {
  @Input() appBlockTyping: boolean = false;

  constructor() { }

  @HostListener('document:keydown', ['$event']) onKeydownHandler($event: KeyboardEvent) {
    if ($event.key === 'Backspace' || $event.key === 'Delete') {
      return
    }
    if (this.appBlockTyping) {
      return $event.preventDefault();
    }
  }

}
