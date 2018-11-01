import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PassportRoutingModule } from './passport-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    PassportRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class PassportModule { }
