import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { WebsiteListComponent } from './website-list/website-list.component';
import { SingleWebsiteComponent } from './single-website/single-website.component';

const routes: Routes = [
  { 
    path: '', 
    component: AboutComponent,
    children: [
      {
        path: 'list',
        component: WebsiteListComponent,
      },
      {
        path: ':shortname',
        component: SingleWebsiteComponent,
      }
    ]
   }
  //  {
  //    path: '',
  //    component: ColorsComponent,
  //  },
  //  {
  //   path: 'list',
  //   component: ColorsListComponent,
  // },
  // {
  //   path: 'details',
  //   component: SingleColorComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
