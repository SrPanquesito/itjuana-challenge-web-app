import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScreenViewListService {

  constructor(private _HttpClient: HttpClient) { }

  getUsers(): Observable<Array<UserInterface>> {
    const path = "/api/user";
    return this._HttpClient.get<Array<UserInterface>>(env.api_url + path);
  }
}

export interface UserInterface {
  id: number,
  firstname: string,
  lastname: string,
  email: string
}