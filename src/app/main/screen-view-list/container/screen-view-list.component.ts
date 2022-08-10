import { Component, OnInit } from '@angular/core';
import { first, finalize } from 'rxjs';
import { ScreenViewListService } from './screen-view-list.service';
import { UserInterface } from '@app/shared/interfaces/user';

@Component({
  selector: 'app-screen-view-list',
  templateUrl: './screen-view-list.component.html',
  styles: [
  ]
})
export class ScreenViewListComponent implements OnInit {
  public processingRequest = false;
  public connectionError = false;

  public users: Array<UserInterface> = new Array();

  constructor(private _ScreenViewListService: ScreenViewListService) { }

  ngOnInit(): void {
    if (!this.processingRequest) {
      this.processingRequest = true;
      this.getUsers();
    }
  }

  getUsers() {
    this._ScreenViewListService.getUsers()
    .pipe(
      first(),
      finalize(() => this.processingRequest = false)
    )
    .subscribe({
      next: r => {
        this.users = r;
      },
      error: err => {
        console.warn(err);
        this.connectionError = true;
      }
    })
  }

}
