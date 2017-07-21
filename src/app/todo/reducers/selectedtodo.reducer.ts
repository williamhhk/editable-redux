import * as todo from '../actions/todo'

export function selectedTodoReducer (state = null, action : todo.Actions)  : any {
  switch (action.type) {
    case todo.SELECTED:
      return action.payload;
    default:
      return state;
  }
};