import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserInterface } from '../../inerfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserInterface = this.service.getUserData();

  constructor(private service: UserServiceService ) { }

  ngOnInit(): void {
  }

}
