import { v1 } from 'uuid';
import { FilterValues, TodoList } from '../../types/types';
import {
  addTodoListAC,
  changeTodoListFilterAC,
  changeTodoListTitleAC,
  removeTodoListAC,
} from './todolists-action-creators';
import { todoListsReducer } from './todolists-reducer';

test('correct todoList should be removed', () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const startState: TodoList[] = [
    { id: todoListId1, title: '1st todo list', filter: 'all' },
    { id: todoListId2, title: '2nd todo list', filter: 'all' },
  ];

  const endState = todoListsReducer(startState, removeTodoListAC(todoListId1));
  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todoListId2);
});

test('correct todoList should be added', () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newTodoListTitle = 'new todo list';

  const startState: TodoList[] = [
    { id: todoListId1, title: '1st todo list', filter: 'all' },
    { id: todoListId2, title: '2nd todo list', filter: 'all' },
  ];

  const endState = todoListsReducer(
    startState,
    addTodoListAC(newTodoListTitle)
  );

  expect(endState.length).toBe(3);
  expect(endState[0].title).toBe(newTodoListTitle);
  expect(endState[0].filter).toBe('all');
});

test('correct todoList should be able to change its name', () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newTodoListTitle = 'new todo list';

  const startState: TodoList[] = [
    { id: todoListId1, title: '1st todo list', filter: 'all' },
    { id: todoListId2, title: '2nd todo list', filter: 'all' },
  ];

  const endState = todoListsReducer(
    startState,
    changeTodoListTitleAC(todoListId2, newTodoListTitle)
  );

  expect(endState[0].title).toBe('1st todo list');
  expect(endState[1].title).toBe(newTodoListTitle);
});

test('correct filter of todoList should be changed', () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newFilter: FilterValues = 'completed';

  const startState: TodoList[] = [
    { id: todoListId1, title: '1st todo list', filter: 'all' },
    { id: todoListId2, title: '2nd todo list', filter: 'all' },
  ];

  const endState = todoListsReducer(
    startState,
    changeTodoListFilterAC(todoListId2, newFilter)
  );

  expect(endState[0].filter).toBe('all');
  expect(endState[1].filter).toBe(newFilter);
});
