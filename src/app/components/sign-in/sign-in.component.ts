import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  exportAs: 'ngForm',
})
export class SignInComponent implements OnInit {
  form = {
    fname: '',
    lname: '',
    email: '',
    age: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
