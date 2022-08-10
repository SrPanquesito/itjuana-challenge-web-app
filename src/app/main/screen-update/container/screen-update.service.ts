import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@environments/environment';
import { UserInterface } from '@app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ScreenUpdateService {

  constructor(private _HttpClient: HttpClient) { }

  getUserById(id: string): Observable<UserInterface> {
    const path = "/api/user/";
    return this._HttpClient.get<UserInterface>(env.api_url + path + id);
  }

  updateUser(user: UserInterface): Observable<any> {
    const path = "/api/user";
    return this._HttpClient.put<any>(env.api_url + path, user);
  }
}
