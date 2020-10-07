import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, 
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
},
{
  path: 'about',
  //component: AboutComponent, 
  canActivate: [AuthGuard],  
  loadChildren: () => import('./about/about-module').then(m => m.AboutModule),
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
