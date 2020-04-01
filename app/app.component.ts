import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
  <products></products>
  `
})
export class AppComponent {

  onClickMe($event){
    console.log("Clicked",$event)
  }
}
