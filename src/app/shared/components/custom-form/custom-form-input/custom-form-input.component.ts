import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from '../custom-form';

@Component({
  selector: 'app-custom-form-input',
  templateUrl: './custom-form-input.component.html',
  styles: [`
    input:focus{
        --tw-ring-color: none;
    }
  `]
})
export class CustomFormInputComponent implements OnInit {
  @Input() field!: FormInputBase<string | boolean>;
  @Input() form!: FormGroup;
  @Input() showErrors: boolean = false;
  @Output() onEnter: EventEmitter<boolean> = new EventEmitter();

  public seePassword = false;

  constructor() { }

  ngOnInit(): void {
  }

  hasFieldError(): boolean | undefined {
    return (
      this.form.get(this.field.key)?.invalid &&
      (this.form.get(this.field.key)?.dirty ||
        this.form.get(this.field.key)?.touched)
    );
  }

  keydownEnter(e: any) {
    e.preventDefault();
    this.onEnter.emit(true);
  }

  seePasswordToggle() {
    this.seePassword = !this.seePassword;
    this.seePassword ? this.field.type = 'text' : this.field.type = 'password';
  }

  applyInputClasses() {
    if (this.form.get(this.field.key)?.valid) {
      return 'focus:border-green-500 focus:ring-green-500 dark:focus:border-green-500 dark:focus:ring-green-500'
    }
    else if (this.showErrors && this.form.get(this.field.key)?.value !== '') {
      return 'focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500'
    }
    else {
      return 'dark:focus:ring-slate-600 dark:focus:border-slate-600'
    }
  }

  applyIconClasses() {
    let classStr;
    if (this.form.get(this.field.key)?.valid) {
      classStr = 'text-green-500 hover:text-green-700'
    }
    else if (this.showErrors && this.form.get(this.field.key)?.value !== '') {
      classStr = 'text-red-500 hover:text-red-700'
    }
    else {
      classStr = 'text-slate-400 hover:text-slate-600'
    }

    switch (this.field.key) {
      case 'password':
        classStr = classStr + ' cursor-pointer ';
        if (this.seePassword) { classStr = classStr + 'fi fi-rs-eye'; }
        else { classStr = classStr + 'fi fi-rs-crossed-eye'; }
        break;
    
      default:
        classStr = classStr + ' ' + 'fi fi-rs-checkbox text-sm'
        break;
    }
    return classStr
  }

}
