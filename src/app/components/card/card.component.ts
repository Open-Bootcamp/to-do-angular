import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() task: Task;

  constructor() {}

  ngOnInit(): void {}
}
