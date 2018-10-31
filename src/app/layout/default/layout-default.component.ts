import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/core/menu.model';
import { MenuService } from 'src/app/core/menu.service';

@Component({
  selector: 'layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.css']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  sideMenus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getSideMenus();
  }

  getSideMenus() {
    this.menuService.getMenus('sidebar').subscribe(menus => this.sideMenus = menus);
  }
}
