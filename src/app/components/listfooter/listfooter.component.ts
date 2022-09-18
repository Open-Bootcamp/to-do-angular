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
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  deleteCompleted() {
    this.clearCompleted.emit();
  }
}
