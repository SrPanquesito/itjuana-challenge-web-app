import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public darkMode: boolean = false;

  constructor() { }

  init() {
      this.checkDarkmode();
  }

  checkDarkmode() {
      this.darkMode = localStorage.getItem('theme') === 'dark' ? true : false;
  }

  toggleDarkmode() {
      if (localStorage.getItem('theme') === 'dark') {
          localStorage.removeItem('theme');
          this.darkMode = false;
      } else {
          localStorage.setItem('theme', 'dark');
          this.darkMode = true;
      }
  }
}
