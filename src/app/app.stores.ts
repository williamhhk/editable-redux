import { todoReducer } from './todo/reducers/todo.reducer'
import { selectedTodoReducer } from './todo/reducers/selectedtodo.reducer'
import { Actions } from './todo/actions/todo'

export interface AppStore {
	todoState : Actions;
	selectedTodoState : Actions;
}

export const appStore = {
	todoState : todoReducer,
	selectedTodoState : selectedTodoReducer
}