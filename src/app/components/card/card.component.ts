import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() task: Task;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleTodo() {
    this.todoService.toggleTodo(this.task.id);
  }
}
