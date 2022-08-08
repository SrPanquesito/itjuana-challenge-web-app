import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section class="h-screen bg-slate-100 dark:bg-slate-900">
      <div class="flex flex-col justify-center items-center h-full w-full overflow-auto">
        <router-outlet></router-outlet>
      </div>
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
