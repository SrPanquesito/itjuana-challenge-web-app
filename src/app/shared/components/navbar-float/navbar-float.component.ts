import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-float',
  templateUrl: './navbar-float.component.html',
  styles: [
  ]
})
export class NavbarFloatComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this._router.navigate(['main', path])
  }

}
