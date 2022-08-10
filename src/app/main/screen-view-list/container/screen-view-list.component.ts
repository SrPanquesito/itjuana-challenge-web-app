import { Component, OnInit } from '@angular/core';
import { first, finalize } from 'rxjs';
import { ScreenViewListService } from './screen-view-list.service';
import { UserInterface } from '@app/shared/interfaces/user';
import { Router } from '@angular/router';

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

  constructor(private _ScreenViewListService: ScreenViewListService, private _router: Router) { }

  ngOnInit(): void {
    if (!this.processingRequest) {
      this.processingRequest = true;
      this.getUsers();
    }
  }

  goToUpdate(path: string, id: number) {
    this._router.navigate(['main', path, id]);
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

  disableUserButton(id: number) {
    document.getElementById('btn_delete_' + id)?.setAttribute("disabled","disabled");
    document.getElementById('btn_update_' + id)?.setAttribute("disabled","disabled");
  }

  deleteUser(id: number) {
    this._ScreenViewListService.deleteUser(String(id))
    .pipe(
      first(),
      finalize(() => {
        this.processingRequest = false;
      })
    )
    .subscribe({
      next: r => {
        const index = this.users.findIndex((el: any) => el.id === id);
        this.users.splice(index, 1);
      }
    });
  }

}
