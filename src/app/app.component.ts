import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <main [ngClass]="{ 'dark': _app.darkMode }">
    <div class="fixed top-3 left-3 z-50">
      <navbar-float></navbar-float>
    </div>
    <div class="fixed top-3 right-3 z-50">
      <ui-darkmode-button></ui-darkmode-button>
    </div>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent implements OnInit {

  constructor(public _app: AppService) { }

  ngOnInit(): void {
    this._app.init();
  }
}
