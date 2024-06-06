import { PageRoutingModule } from './page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "../header/header.component";



@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HeaderComponent, PageRoutingModule
    ]
    ,
    bootstrap: [HomeComponent]
})
export class PageModule { }
