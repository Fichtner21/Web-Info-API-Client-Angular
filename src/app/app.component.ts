import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageTitleService } from './page-title.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //title = 'angular-fundamentals';

  public isUserLogged$;

  constructor(private authService: AuthService, private router: Router, private pageTitleService: PageTitleService){}

  public ngOnInit(){  
    //this.translateService.setDefaultLang('pl');
    // const translations = this.translateService.instant('nav.home');  
    // console.log(translations);  

    this.isUserLogged$ = this.authService.isUserLogged$; 

    const routerEvents = this.router.events;
    
    routerEvents.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.pageTitleService.setTitle(event.url);
    });
  }

  public logout(){
    this.authService.logOut();
    //this.isUserLogged$ = this.authService.isUserLogged$;
  }
}

