import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RouteProject';
  currentTime$:Observable<string> = this.service.getTimeObservable();
  // time!: string;
  // subscription: Subscription = new Subscription();

  constructor(private service: UserServiceService) {}

  // ngOnInit() {
  //   this.subscription.add(
  //     this.currentTime$.subscribe((data: string) => {
  //       this.time = data;
  //     })
  //   )
  // }
  //
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
