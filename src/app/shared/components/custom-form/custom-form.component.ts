import { Component, Input, OnInit, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase, FormOptions } from './custom-form';

@Directive({
  selector: '[errorMessage]'
})
export class ErrorMessageDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styles: [
  ]
})
export class CustomFormComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];
  @Input() formOptions: FormOptions = new FormOptions();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  @ContentChild(ErrorMessageDirective) externalErrorMessage!: ErrorMessageDirective;

  public form!: FormGroup;
  public showErrors = false;

  constructor() { }

  ngOnInit(): void {
    this.toFormGroup();
  }

  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  submit(): void {
    this.showErrors = true;
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    this.onSubmit.emit(this.form.value);
  }

  private toFormGroup(): void {
    let group: any = {};

    this.formFields?.forEach((field) => { group[field.key] = new FormControl(field.value || '', field.validators); });
    this.form = new FormGroup(group);
  }

}
