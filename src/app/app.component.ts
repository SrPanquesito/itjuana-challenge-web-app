import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <main [ngClass]="{ 'dark': _app.darkMode }">
    <div class="fixed top-3 right-3 z-50">
        <button
          class="relative w-14 h-7 rounded-full transition-all border bg-slate-50 border-slate-300 dark:bg-gray-800 dark:border-gray-700"
          (click)="toggleDarkmode()" type="button"
        >
          <div class="absolute top-0 bottom-0 my-auto mx-0 rounded-full w-7 h-7 transition-all flex items-center justify-center shadow-button bg-yellow-50 dark:bg-slate-400" [ngClass]="{'right-0': _app.darkMode, 'right-1/2': !_app.darkMode}">
            <i class="text-orange-300 dark:text-slate-700 fi" [ngClass]="{'fi-rs-sun': !_app.darkMode, 'fi-sr-moon-stars': _app.darkMode}"></i>
          </div>
        </button>
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

  toggleDarkmode() {
    this._app.toggleDarkmode();
  }
}
