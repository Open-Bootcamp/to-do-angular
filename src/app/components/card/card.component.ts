import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Output() getId: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleTodo() {
    this.getId.emit(this.task.id);
  }
}
