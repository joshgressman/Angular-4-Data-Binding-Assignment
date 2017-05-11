import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
   //get data from outside this component and brings into the component gets data from app.comp.html
   //Is now bindable from outside of component, see the app.comp where value is binded
   @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
