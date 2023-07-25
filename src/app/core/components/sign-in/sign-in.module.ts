import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }
