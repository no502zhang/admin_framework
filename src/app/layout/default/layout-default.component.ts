import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.css']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  constructor() { }

  ngOnInit() {
  }

}
