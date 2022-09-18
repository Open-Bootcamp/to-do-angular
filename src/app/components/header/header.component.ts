import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'to-do-angular';
  mode = localStorage.getItem('theme') ?? 'light';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.style.background =
      this.mode === 'light' ? 'hsl(236, 33%, 92%)' : 'hsl(235, 21%, 11%)';
  }
  changeMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.document.body.style.background =
      this.mode === 'light' ? 'hsl(236, 33%, 92%)' : 'hsl(235, 21%, 11%)';
    localStorage.setItem('theme', this.mode);
  }
}
