import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LayoutDefaultComponent } from './default/layout-default.component';
import { LayoutHeaderComponent } from './default/header/layout-header.component';
import { LayoutSidebarComponent } from './default/sidebar/layout-sidebar.component';
import { LayoutFullscreenComponent } from './fullscreen/layout-fullscreen.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutDefaultComponent, LayoutHeaderComponent, LayoutSidebarComponent, LayoutFullscreenComponent,]
})
export class LayoutModule { }
