import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, UPDATE_EXT_TODO, TOGGLE_DONE, SELECTED }  from './todo/actions/todo';
import {AppStore} from './app.stores'
import { Actions } from './todo/actions/todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.done { text-decoration: line-through; color: salmon; }`
    ]
})
export class AppComponent implements OnInit {
  todos$: Observable<any>;
  todo: string;
  editing = false;
  indexToEdit: number | null;
  // TODO 
  selected : any;
  selectedTodo$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.todos$ = this.store.select(state=>state.todoState);
    this.selectedTodo$ = this.store.select(state=>state.selectedTodoState);
    this.todos$.subscribe(log=>console.log(log));  
    this.selectedTodo$.subscribe(selectedTodo => this.selected = selectedTodo);  
  }

  addTodo(value) {
    this.store.dispatch({ type: ADD_TODO, payload: { category : 'USER', value, done: false } });
    this.todo = '';
  }
  
  addTodoExtended(valueExt) {
    this.store.dispatch({ type: ADD_TODO, payload: { category : 'COMPUTER', valueExt, done: false , extra :'Hello World Extended'} });
    this.todo = '';
  }

  deleteTodo(index) {
    this.store.dispatch({ type: DELETE_TODO, payload: index });
  }

  editTodo(todo, index) {
    this.store.dispatch( { type : SELECTED, payload : todo})
    this.editing = true;
    if (todo.category === 'COMPUTER')
    {
      this.todo = todo.valueExt;
    }
    else 
    {
     this.todo = todo.value;
    }
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
    console.log(this.selected);
    if (this.selected.category === "USER")
    {
      this.selected.value = updatedTodo;
      this.store.dispatch({ type: UPDATE_TODO, payload: { index: this.indexToEdit, newValue: this.selected.value } });
    }
    else if (this.selected.category === "COMPUTER") {
      this.selected.valueExt = updatedTodo;
      this.store.dispatch({ type: UPDATE_EXT_TODO, payload: { index: this.indexToEdit, newValue: this.selected.valueExt } });
      
    }
    this.todo = '';
    this.indexToEdit = null;
    this.editing = false;
  }

  toggleDone(todo, index) {
    this.store.dispatch({ type: TOGGLE_DONE, payload: { index, done: todo.done } });
  }

  selectedItem(todo, index ) {
    this.store.dispatch( { type : SELECTED, payload : todo})
    this.editing = true;
    if (todo.category === 'COMPUTER')
    {
      this.todo = todo.valueExt;
    }
    else 
    {
     this.todo = todo.value;
    }
    this.indexToEdit = index;

  }

}