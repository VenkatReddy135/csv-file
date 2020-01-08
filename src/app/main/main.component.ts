import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any;
  status: boolean = true;
  constructor() { }
  Hide(e){
    
    this.data=e;
   this.status = false;
  }
  ngOnInit() {
  }
}
