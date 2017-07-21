import { Action } from '@ngrx/store';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const SELECTED = 'SELECTED_TODO'
export const UPDATE_EXT_TODO = 'UPDATE__EXT_TODO'

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: any) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: any) {}
}

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: any) {}
}

export class UpdateExtTodoAction implements Action {
  readonly type = UPDATE_EXT_TODO;

  constructor(public payload: any) {}
}

export class ToggleDoneAction implements Action {
  readonly type = TOGGLE_DONE;

  constructor(public payload: any) {}
}

export class SelectedTodoAction implements Action {
  readonly type = SELECTED;
  constructor(public payload: any) {}
}

export type Actions =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ToggleDoneAction
  | SelectedTodoAction
  | UpdateExtTodoAction;


  export interface User {
    category : string;
    others : string;
  }

  export interface Computer {
    category : string;
    machineName : string;
  }
