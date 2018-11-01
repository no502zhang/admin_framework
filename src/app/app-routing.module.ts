import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutDefaultComponent } from './layout/default/layout-default.component';
import { LayoutFullscreenComponent } from './layout/fullscreen/layout-fullscreen.component';

import { moduleRoutes, fullscreenRoutes } from '../../config/router.config';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: moduleRoutes
  },
  {
    path: '',
    component: LayoutFullscreenComponent,
    children: fullscreenRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
