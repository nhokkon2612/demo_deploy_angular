import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit {
  timeNow: number | undefined;
  constructor() { }
  ngOnInit(): void {
  }

  getTimer(event: any){
    this.timeNow=event;
  }
}
