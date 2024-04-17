import { TasksState, TodoListType } from '../../types/common';
import { tasksReducer } from './tasks-reducer/tasks-reducer';
import { addTodoListAC } from './todo-lists-reducer/todolists-action-creators';
import { todoListsReducer } from './todo-lists-reducer/todolists-reducer';

test('ids in states should be equal', () => {
  const startTasksState: TasksState = {};
  const startTodoListsState: TodoListType[] = [];

  const action = addTodoListAC('new todo list');

  const endTaskState = tasksReducer(startTasksState, action);
  const endTodoListsState = todoListsReducer(startTodoListsState, action);

  const keys = Object.keys(endTaskState);
  const idFromTasks = keys[0];
  const idFromTodoLists = endTodoListsState[0].id;

  expect(idFromTasks).toBe(action.todoListId);
  expect(idFromTodoLists).toBe(action.todoListId);
});
