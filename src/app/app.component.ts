import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){ //firedNumber will get data from the $event event emitter data
    if(firedNumber % 2  === 0){
      this.evenNumbers.push(firedNumber);
      console.log(this.evenNumbers);
    } else {
      this.oddNumbers.push(firedNumber);
      console.log(this.oddNumbers);
    }
  }
}
