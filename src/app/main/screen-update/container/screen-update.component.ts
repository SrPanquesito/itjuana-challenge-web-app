import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormOptions, FormInputBase, FormTextbox } from '@app/shared/components/custom-form/custom-form';
import { finalize, first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ScreenUpdateService } from './screen-update.service';

@Component({
  selector: 'app-screen-update',
  templateUrl: './screen-update.component.html',
  styles: [
  ]
})
export class ScreenUpdateComponent implements OnInit {
  private processingRequest = false;
  public requestErrorMessage = '';

  public user: any;

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

  constructor(private _router: Router, private _route: ActivatedRoute, private _ScreenUpdateService: ScreenUpdateService) { }

  ngOnInit(): void {
    this._route.params.pipe(first())
    .subscribe({
      next: res => {
        if(this._route.snapshot?.data['user']) { 
          this.user = this._route.snapshot.data['user'];
          this.myForm[0].value = this.user.firstname;
          this.myForm[1].value = this.user.lastname;
          this.myForm[2].value = this.user.email;
        }
        else {
          this.user = null;
          this.formOptions.disable = true;
        }
      }
    });
  }

  onSubmitForm(form: any) {
    if (!this.processingRequest) {
      this.processingRequest = true;
      this.updateUser(form);
    }
  }

  updateUser(payload: any) {
    this._ScreenUpdateService.updateUser({ id: this.user.id, ...payload})
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
