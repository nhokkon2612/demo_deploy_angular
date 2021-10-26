import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  email?:string;
  password?:string;
  phone?:string;
  book = {name: '123', year: 1993, stars: null};
  constructor() { }

  ngOnInit(): void {
  }
  getInfo(data:any){
    console.log(data)
  }

}
