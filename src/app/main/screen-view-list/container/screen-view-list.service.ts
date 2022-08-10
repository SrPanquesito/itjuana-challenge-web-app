import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@environments/environment';
import { UserInterface } from '@app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ScreenViewListService {

  constructor(private _HttpClient: HttpClient) { }

  getUsers(): Observable<Array<UserInterface>> {
    const path = "/api/user";
    return this._HttpClient.get<Array<UserInterface>>(env.api_url + path);
  }

  deleteUser(id: string): Observable<any> {
    const path = "/api/user/";
    return this._HttpClient.delete<any>(env.api_url + path + id);
  }
}