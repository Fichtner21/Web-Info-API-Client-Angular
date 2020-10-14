import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { AuthU } from '../login-model/auth-u.interface';
import { AuthRes } from '../login-model/auth-res.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, startWith } from 'rxjs/operators';

@Component({
selector: 'app-new-login',
templateUrl: './new-login.component.html',
styleUrls: ['./new-login.component.scss']
})

export class NewLoginComponent implements OnInit {
  angForm: FormGroup;

  constructor( private fb: FormBuilder, private dataService: ApiService, private router:Router ) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    }); 
  }

  ngOnInit() { }
    postdata(angForm1) {
      this.dataService.userlogin(angForm1.value.email, angForm1.value.password).pipe(first()).subscribe( data => {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/new-dashboard';
        this.router.navigate([redirect]);
      },
      error => {
        alert("User name or password is incorrect")
      });
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
}

// export class NewLoginComponent implements OnInit {
//   public angForm = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
//   });

//   public buttonDisabled = this.angForm.statusChanges.pipe(
//     map((status) => status === 'INVALID'), startWith(true)
//   );

//   public emailMessage$ = this.angForm.valueChanges.pipe(
//     map((value) => {
//       const emailErrors = this.angForm.controls.email?.errors;
//       if(emailErrors){
//         if(emailErrors?.required){
//           return 'This field is required';
//         } 
//         if(emailErrors?.email){
//           return 'Wrong email format';
//         } 
//       }      
//       return '';
//     })
//   );

//   public passwordMessage$ = this.angForm.valueChanges.pipe(
//     map((value) => {
//       const passwordErrors = this.angForm.controls.password?.errors;
//       if(passwordErrors && this.angForm.controls.password?.dirty){
//         if(passwordErrors?.required){
//           return 'This field is required';
//         }
//         if(passwordErrors?.minlength){
//           return 'Password should have at least 8 chars';
//         }
//         return '';
//       }  else {
//         return '';
//       }     
//     }),
//   )

//   constructor(private apiService: ApiService, private router: Router, private snackBar: MatSnackBar){}

//   public ngOnInit(): void {
//     const valueChanges$ = this.angForm.valueChanges;
//     //valueChanges$.subscribe((value) => {console.log(value)});

//     const statusChanges$ = this.angForm.statusChanges;
//       statusChanges$.subscribe((status) => {
//       // const emailControl = this.angForm.controls.email;
//       // console.log(emailControl); 
//     });  
//   }

//   public onSubmit($event){
//     if(this.angForm.valid){
//       const user: AuthU = this.angForm.value;
//       this.apiService.
//     }
//   }
// }