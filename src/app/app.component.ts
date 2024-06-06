import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";

import { PageModule } from './page/page.module';
import { AuthenModule } from './authen/authen.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,PageModule,AuthenModule]
    
})
export class AppComponent {
  title = 'test-routing';
  constructor(private contexts: ChildrenOutletContexts) {}
}
