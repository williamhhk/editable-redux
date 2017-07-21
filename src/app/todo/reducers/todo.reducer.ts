import { Action } from '@ngrx/store';
import * as todo from '../actions/todo'
import { Actions } from '../actions/todo'

export function todoReducer(state = [], 
action: Actions) {
  switch (action.type) {
    case todo.ADD_TODO:
//  Add before list
//      return [ action.payload, ...state ];    
// Add after list
      return [ ...state, action.payload];
    case todo.DELETE_TODO:
      return state.filter((item, index) => index !== action.payload);
    case todo.UPDATE_TODO:
    console.log(action.payload);
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { value: action.payload.newValue })
          : item;
      });

    //  Only update the change value....or copy new object 
    case todo.UPDATE_EXT_TODO:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { valueExt: action.payload.newValue })
          : item;
      });      
    case todo.TOGGLE_DONE:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { done: !action.payload.done })
          : item;
      });
    default:
      return state;
  }
}