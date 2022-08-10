import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, map, first } from 'rxjs';
import { ScreenUpdateService } from './screen-update.service';

@Injectable({
  providedIn: 'root'
})
export class ScreenUpdateResolver implements Resolve<any> {
  constructor(private _ScreenUpdateService: ScreenUpdateService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let userId = route.params['id'];
    
    if (userId) {
      return this._ScreenUpdateService.getUserById(userId)
      .pipe(
        map((res:any) => { return res }),
        first()
      );
    }
    else {
      return of(null)
    }
  }
}
