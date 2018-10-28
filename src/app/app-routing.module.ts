import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './layout/default/layout-default.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
