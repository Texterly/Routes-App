import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { UserInterface } from '../../inerfaces/login';
import { FormControl, FormGroup } from '@angular/forms';

export interface ProfileForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  profileForm: FormGroup<ProfileForm> = new FormGroup<ProfileForm>({
    firstName: new FormControl<string>('', { nonNullable: true }),
    lastName: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
  });

  user: UserInterface = this.service.getUserData();

  constructor(private service: UserServiceService ) { }
}
