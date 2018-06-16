import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message = 'Hello world';
  constructor() { }

  printMessage(): Observable<string> {
    return of(this.message);
  }
}

