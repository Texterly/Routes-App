import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RouteProject';
  currentTime: String;

  constructor(public service: UserServiceService) {
    this.currentTime = this.service.getTime().toLocaleTimeString();
    }
}
