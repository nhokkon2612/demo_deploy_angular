import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-name-child',
  templateUrl: './card-name-child.component.html',
  styleUrls: ['./card-name-child.component.css']
})
export class CardNameChildComponent implements OnInit {

  @Input() cardName: any;
  @Input() email: any;
  @Input() phone: any;

  constructor() { }

  ngOnInit(): void {
  }

}
