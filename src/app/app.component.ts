import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-angular';
  mode='light';

  constructor(@Inject(DOCUMENT)private document: Document){
    this.document.body.style.background =  this.mode === 'light'?"hsl(236, 33%, 92%)":"hsl(235, 21%, 11%)";
  }
  changeMode(){
    this.mode === 'light'?this.mode = 'dark':this.mode='light';
    this.document.body.style.background =  this.mode === 'light'?"hsl(236, 33%, 92%)":"hsl(235, 21%, 11%)";
  }
}
