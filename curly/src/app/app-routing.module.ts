import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path:'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'**',
    loadComponent: () => import('./pages/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
