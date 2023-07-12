import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getTime():Date {
    return new Date();
  }
  constructor() { }
}
