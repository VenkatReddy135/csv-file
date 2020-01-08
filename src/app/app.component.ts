import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
