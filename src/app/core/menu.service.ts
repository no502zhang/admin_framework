import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Menu } from './menu.model';

import { SIDEBAR_MENUS } from '../../../mock/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus(type: string): Observable<Menu[]> {
    if (type == 'sidebar') {
      return of(SIDEBAR_MENUS);
    }
  }
}
