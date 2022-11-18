import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-News';
  parentMessage="message form parent";

  items = ['item1', 'item2', 'item3', 'item4'];

  
}
