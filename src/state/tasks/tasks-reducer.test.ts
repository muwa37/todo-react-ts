import { TasksState } from '../../types/types';
import {
  addTodoListAC,
  removeTodoListAC,
} from '../todo-lists/todolists-action-creators';
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from './tasks-action-creators';
import { tasksReducer } from './tasks-reducer';

test('correct task should be deleted from correct array', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: false },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: false },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = removeTaskAC('2', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(2);
  expect(endState['todoListId2'].every(t => t.taskId !== '2')).toBeTruthy();
});

test('correct task should be added to correct array', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: false },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: false },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = addTaskAC('new task sample', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(4);
  expect(endState['todoListId2'][3].taskId).toBeDefined();
  expect(endState['todoListId2'][3].title).toBe('new task sample');
  expect(endState['todoListId2'][3].isDone).toBeFalsy();
});

test('correct task should be able to change its title', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: false },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: false },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = changeTaskTitleAC('changed task title', '3', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'][2].title).toBe('3rd sample');
  expect(endState['todoListId2'][2].title).toBe('changed task title');
});

test('task should be able to change its status', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: false },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: false },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = changeTaskStatusAC(true, '3', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId2'][2].isDone).toBeTruthy();
  expect(endState['todoListId1'][2].isDone).toBeFalsy();
});

test('should add new tasks array when todoList is added', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: true },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: true },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = addTodoListAC('new todo list');
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);
  const newKey = keys.find(k => k !== 'todoListId1' && k !== 'todoListId2');
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toStrictEqual([]);
});

test('should remove correct tasks array when todoList is removed', () => {
  const startState: TasksState = {
    todoListId1: [
      { taskId: '1', title: '1st sample', isDone: false },
      { taskId: '2', title: '2nd sample', isDone: true },
      { taskId: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { taskId: '1', title: 'sample 1', isDone: false },
      { taskId: '2', title: 'sample 2', isDone: true },
      { taskId: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = removeTodoListAC('todoListId2');
  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);

  expect(keys.length).toBe(1);
  expect(endState['todoListId2']).toBeUndefined();
});
