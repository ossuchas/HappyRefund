import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  helloWorld() {
      console.log('Hello World');
  }
}
