import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todo-app.component.html',
  styleUrls: [ 'todo-app.component.css' ],
  providers: [ TodoService ]
})
export class TodoAppComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor( private todoService: TodoService ) {}

  toggleTodoComplete( todo )
  {
    this.todoService.toggleTodoComplete( todo );
  }

  addTodo()
  {
    this.todoService.addTodo( this.newTodo );
    this.newTodo = new Todo();
  }

  removeTodo( todo )
  {
    this.todoService.deleteTodoById( todo.id );
  }

  get todos()
  {
    return this.todoService.getAllTodos();
  }

  ngOnInit() {
  }

}
