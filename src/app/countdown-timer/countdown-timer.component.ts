import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timeStart: number = 100;
  action: boolean = false;
  @Output() timeNow = new EventEmitter<number>();
  constructor() {
  }

  runtimeCountdown() {
    let interval = setInterval(() => {
      this.timeNow.emit(this.timeStart)
      this.timeStart = +this.timeStart - 1;
      if ((this.timeStart == 0) || (this.action)) {
        clearInterval(interval)
      }
    }, 1000)
  }

  stopTimer() {
    this.action = true
    console.log(this.timeStart)
  }

  continueTime() {
    if (this.action) {
      this.action = false;
      this.runtimeCountdown()
    }
  }

  ngOnInit(): void {
  }

}
