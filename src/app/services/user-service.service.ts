import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { UserInterface } from '../inerfaces/login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() {
  }

  getTime(): Date {
    return new Date();
  }

  getTimeObservable(): Observable<string> {
    return timer(0, 1000).pipe(
      map(() => new Date()),
      map((date: Date) => date.toTimeString())
    );
  }

  getUserData(): UserInterface {
    return {
      lastName: 'Segodnik',
      firstName: 'Pavel',
      age: 30,
      sex: 'm',
      email: 'pasdasd@mail.com',
    }
  }

}
