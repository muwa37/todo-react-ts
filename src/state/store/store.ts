import { combineReducers, createStore } from 'redux';
import { tasksReducer } from '../reducers/tasks-reducer/tasks-reducer';
import { todoListsReducer } from '../reducers/todo-lists-reducer/todolists-reducer';

export const rootReducer = combineReducers({
  todoListsReducer,
  tasksReducer,
});

export const store = createStore(rootReducer);
