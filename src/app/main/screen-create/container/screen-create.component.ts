import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormOptions, FormInputBase, FormTextbox } from '@app/shared/components/custom-form/custom-form';
import { finalize, first } from 'rxjs';
import { ScreenCreateService } from './screen-create.service';
import { UserInterface } from '@app/shared/interfaces/user';

@Component({
  selector: 'app-screen-create',
  templateUrl: './screen-create.component.html',
  styles: [
  ]
})
export class ScreenCreateComponent implements OnInit {
  private processingRequest = false;
  public requestErrorMessage = '';

  public formOptions: FormOptions = {
    formClass: "flex flex-col gap-6",
    submitShow: true,
    submitText: "Submit",
    disable: false
  };

  public myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
      key: 'firstname',
      label: 'Firstname',
      placeholder: 'Enter user firstname',
      type: 'text',
      value: '',
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(45)]
    }),
    new FormTextbox({
      key: 'lastname',
      label: 'Lastname',
      placeholder: 'Enter user lastname',
      type: 'text',
      value: '',
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(45)]
    }),
    new FormTextbox({
      key: 'email',
      label: 'Email',
      placeholder: 'Enter user email',
      type: 'text',
      value: '',
      validators: [Validators.required, Validators.pattern('^[aA-zZ0-9._%+-]+@[aA-zZ0-9.-]+\\.[aA-zZ]{2,4}$'), Validators.maxLength(255)]
    }),
  ];

  constructor(private _router: Router, private _ScreenCreateService: ScreenCreateService) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: any) {
    if (!this.processingRequest) {
      this.processingRequest = true;
      this.formOptions.disable = true;
      this.createUser(form);
    }
  }

  createUser(payload: Partial<UserInterface>) {
    this._ScreenCreateService.createUser(payload)
    .pipe(
      first(),
      finalize(() => {
        this.processingRequest = false;
        this.formOptions.disable = false;
      })
    )
    .subscribe({
      next: res => {
        this._router.navigate(['main','view-list'])
      },
      error: err => {
        this.requestErrorMessage = err?.networkError?.name === "HttpErrorResponse" ? "Couldn't connect to server." : err;
      }
    });
  }
}
