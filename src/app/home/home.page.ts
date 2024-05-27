import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { IonContent } from '@ionic/angular/standalone';

interface Todo {
  id: number;
  todoText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  imports: [RouterOutlet, MatIconModule, FormsModule],
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  todos: Todo[] = [];
  todoText: string = '';

  addTodo(todoText: string) {
    if (!todoText) {
      alert('Cannot add empty todo');
      return;
    }
    this.todos.push({
      id: this.todos.length + 1,
      todoText,
    });
    this.todoText = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
