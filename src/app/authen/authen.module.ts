import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenRoutingModule } from './authen-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from "../header/header.component";





@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule, AuthenRoutingModule,
        HeaderComponent
    ]
})
export class AuthenModule { }
