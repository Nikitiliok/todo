import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Clean the room',
        completed: false,
      },
      {
        content: 'Read the book',
        completed: false,
      },
      {
        content: 'Programming 6 hours',
        completed: false,
      }
    ]
  }

  toggleDone(id: number): void {
    this.todos.map((todo, i) => {
      if (i === id) {
        todo.completed = !todo.completed;
      }
    })
  }

  handleRomove(id: number) {
    this.todos = this.todos.filter((todo, i) => i !== id)
  }

  handleSubmit() {
    if (this.inputTodo !== '') {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
    }
    
    this.inputTodo = '';
  }
}
