import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public onInputChange($event){
    console.log('changed', $event);
  }

  public name = 'Ernest';
  public user = {
    email: '',
    password: '',    
  }

  public async onSubmit($event){    
    const req = await this.authService.registerUser(this.user);
    console.log(req);
  }

  public onChange($event){
    console.log($event + this.user.password);
  }
  
}
