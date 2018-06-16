import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  message = '';

  ngOnInit(): void {
    this.printMessage();
  }

  constructor(private messageService: MessageService) {
  }

  printMessage(): void {
    this.messageService.printMessage()
      .subscribe(message => this.message = message);
  }

}
