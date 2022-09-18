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
    this.mode === 'dark' && this.document.body.classList.add('dark-theme');
  }

  changeMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', this.mode);
  }
}
