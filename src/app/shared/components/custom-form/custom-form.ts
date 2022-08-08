import { ValidatorFn } from '@angular/forms';

export class FormInputBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  placeholder: string;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string; }[];
  validators: ValidatorFn[] | null;
  readonly: boolean;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      placeholder?: string;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      validators?: ValidatorFn[] | null;
      readonly?: boolean;
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
  }
}

export class FormOptions {
  formClass: string;
  submitShow: boolean;
  submitText: string;
  disable: boolean;

  constructor(
    options: {
      formClass?: string;
      submitShow?: boolean;
      submitText?: string;
      disable?: boolean;
    } = {},
  ) {
    this.formClass = options.formClass || '';
    this.submitShow = !!options.submitShow;
    this.submitText = options.submitText || '';
    this.disable = !!options.disable;
  }
}

export class FormTextbox extends FormInputBase<string> {
  override controlType = 'textbox';
}

export class FormDropdown extends FormInputBase<string> {
  override controlType = 'dropdown';
}

export class FormCheckbox extends FormInputBase<string> {
  override controlType = 'checkbox';
}