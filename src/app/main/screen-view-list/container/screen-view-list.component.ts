import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ScreenViewListService } from '../screen-view-list.service';

@Component({
  selector: 'app-screen-view-list',
  templateUrl: './screen-view-list.component.html',
  styles: [
  ]
})
export class ScreenViewListComponent implements OnInit {

  constructor(private _ScreenViewListService: ScreenViewListService) { }

  ngOnInit(): void {
    // this._ScreenViewListService.getUsers().pipe(first())
    // .subscribe(r => console.log(r))
  }

}
