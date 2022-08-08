import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <section class="h-screen bg-slate-100 dark:bg-slate-900">
      <div class="flex flex-col justify-start h-full w-full overflow-auto">
        <p class="text-slate-900 dark:text-slate-200">Main Works? </p>
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
