import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Output() getId: EventEmitter<number> = new EventEmitter();
  @Output() getIdDelete: EventEmitter<number> = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleTodo() {
    this.getId.emit(this.task.id);
  }

  deleteTodo() {
    this.getIdDelete.emit(this.task.id);
  }
}
