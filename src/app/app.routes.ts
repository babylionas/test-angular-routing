import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authen/authen.module').then(m => m.AuthenModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
