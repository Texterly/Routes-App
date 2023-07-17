import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserInterface } from '../../inerfaces/login';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameControl!: FormControl;
  lastNameControl!: FormControl;
  email!: FormControl;
  password!: FormControl;


  user: UserInterface = this.service.getUserData();

  constructor(private service: UserServiceService ) { }

  ngOnInit(): void {
    this.nameControl = new FormControl('');
    this.lastNameControl = new FormControl('');
    this.email = new FormControl();
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.nameControl.value;
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.lastNameControl.valueChanges.subscribe((value) => console.log(value));
    this.password.statusChanges.subscribe((status) => console.log(status));
  }

}
