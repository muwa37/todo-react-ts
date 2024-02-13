import { TasksState, TodoList } from '../types/types';
import { tasksReducer } from './tasks/tasks-reducer';
import { addTodoListAC } from './todo-lists/todolists-action-creators';
import { todoListsReducer } from './todo-lists/todolists-reducer';

test('ids in states should be equal', () => {
  const startTasksState: TasksState = {};
  const startTodoListsState: TodoList[] = [];

  const action = addTodoListAC('new todo list');

  const endTaskState = tasksReducer(startTasksState, action);
  const endTodoListsState = todoListsReducer(startTodoListsState, action);

  const keys = Object.keys(endTaskState);
  const idFromTasks = keys[0];
  const idFromTodoLists = endTodoListsState[0].id;

  expect(idFromTasks).toBe(action.todoListId);
  expect(idFromTodoLists).toBe(action.todoListId);
});
