import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listfooter',
  templateUrl: './listfooter.component.html',
  styleUrls: ['./listfooter.component.css'],
})
export class ListfooterComponent implements OnInit {
  @Input() taskCompleted: number;
  constructor() {}

  ngOnInit(): void {}
}
