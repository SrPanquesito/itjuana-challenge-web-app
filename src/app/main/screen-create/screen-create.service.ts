import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenCreateService {

  constructor(private _HttpClient: HttpClient) { }

  createUser(payload: CreateUserInterface): Observable<any> {
    const path = "/api/user";
    return this._HttpClient.post<any>(env.api_url + path, payload);
  }
}

export interface CreateUserInterface {
  firstname: string,
  lastname: string,
  email: string
}