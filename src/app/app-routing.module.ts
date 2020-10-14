import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { AuthguardGuard } from './authguard.guard';

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
  canActivate: [AuthguardGuard],  
  loadChildren: () => import('./about/about-module').then(m => m.AboutModule),
},
{
  path: 'new-login',
  component: NewLoginComponent,
},
{
  path: 'new-register',
  component: NewRegisterComponent,
},
{
  path: 'new-dashboard',
  component: NewDashboardComponent,
  canActivate: [AuthguardGuard],
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
