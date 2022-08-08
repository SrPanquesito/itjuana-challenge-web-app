import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'ui-darkmode-button',
  templateUrl: './ui-darkmode-button.component.html',
  styles: [
  ]
})
export class UiDarkmodeButtonComponent implements OnInit {

  constructor(public _app: AppService) { }

  ngOnInit(): void {
  }

  toggleDarkmode() {
    this._app.toggleDarkmode();
  }
}
