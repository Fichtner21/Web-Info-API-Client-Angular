import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
// import { WebsiteListComponent } from './about/website-list/website-list.component';
// import { SingleWebsiteComponent } from './about/single-website/single-website.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewLoginComponent,
    NewRegisterComponent,
    NewDashboardComponent,
    //AboutComponent,
    //WebsiteListComponent,
    //SingleWebsiteComponent,             
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
