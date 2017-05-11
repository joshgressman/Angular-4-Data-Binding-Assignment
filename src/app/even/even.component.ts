import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  //Gets external data that can now be binded with the number propert, this is done in the app.html
  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
