import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.css']
})
export class LayoutSidebarComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
