import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-listfooter',
  templateUrl: './listfooter.component.html',
  styleUrls: ['./listfooter.component.css'],
})
export class ListfooterComponent implements OnInit {
  @Input() taskCompleted: number;
  @Output() clearCompleted: EventEmitter<void> = new EventEmitter();
  @Output() activeTask: EventEmitter<void> = new EventEmitter();
  @Output() completedTask: EventEmitter<void> = new EventEmitter();
  @Output() allTask: EventEmitter<void> = new EventEmitter();

  message: string;
  all: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  deleteCompleted() {
    //console.log('deleteCompleted');
    this.clearCompleted.emit();
  }

  getAllTask() {
    this.allTask.emit();
  }

  getActiveTask() {
    this.activeTask.emit();
  }

  getCompletedTask() {
    this.completedTask.emit();
  }
}
