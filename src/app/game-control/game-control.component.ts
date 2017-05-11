import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //event is now listanable outside of the component
  //@Output creates a custom event that can be used in other components as (intervalFired)=""
   @Output() intervalFired = new EventEmitter<number>(); //emits an event with type number
   interval;
   lastNumber = 0;
  constructor() { }

  onStartGame(){
   this.interval = setInterval(()=>{
     this.intervalFired.emit(this.lastNumber + 1); //emits data to other components
     this.lastNumber++;
   },1000); //native java script runs a function every second

  }

  onPauseGame(){
    clearInterval(this.interval); //clears - stops interval within the onStartGame()
  }

  ngOnInit() {
  }

}
