import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router'; //samo sie doda, jak dodamy RouterModule w importach poniżej (@NgModule -> imports [])
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([{
      path: '', //scieżka do tego komponentu czyli auth/register/
      component: RegisterComponent //tutaj ładujemy komponent jaki ma być wyświetlony
    }]),      
  ],
})
export class RegisterModule { }
