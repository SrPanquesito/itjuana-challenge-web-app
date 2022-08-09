import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section class="h-screen w-full bg-slate-100 dark:bg-slate-900">
        <router-outlet></router-outlet>
    </section>
  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
