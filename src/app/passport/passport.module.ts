import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PassportRoutingModule } from './passport-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    PassportRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class PassportModule { }
