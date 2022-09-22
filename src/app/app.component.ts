import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-self-study';

  text: string = "property data binding!";

  textEvent : number = 1;

  textModal : string =  "";


  eventDataBinding() {
    this.textEvent++
    console.log(this.textEvent);
  }
}
