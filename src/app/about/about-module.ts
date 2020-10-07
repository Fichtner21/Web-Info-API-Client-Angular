import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WebsiteListComponent } from './website-list/website-list.component';
import { SingleWebsiteComponent } from './single-website/single-website.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { DisplayColorPipe } from './display-color.pipe';
//import { ColorHighlightDirective } from './color-highlight.directive';
import { DisplayColorPipe } from './display-color.pipe';

@NgModule({
  declarations: [AboutComponent, WebsiteListComponent, SingleWebsiteComponent, DisplayColorPipe],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule   
  ]
})
export class AboutModule { }
