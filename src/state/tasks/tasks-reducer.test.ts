import { TasksState } from '../../types/types';
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
      { id: '1', title: '1st sample', isDone: false },
      { id: '2', title: '2nd sample', isDone: false },
      { id: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'sample 1', isDone: false },
      { id: '2', title: 'sample 2', isDone: false },
      { id: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = removeTaskAC('2', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(2);
  expect(endState['todoListId2'].every(t => t.id !== '2')).toBeTruthy();
});

test('correct task should be added to correct array', () => {
  const startState: TasksState = {
    todoListId1: [
      { id: '1', title: '1st sample', isDone: false },
      { id: '2', title: '2nd sample', isDone: false },
      { id: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'sample 1', isDone: false },
      { id: '2', title: 'sample 2', isDone: false },
      { id: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = addTaskAC('new task sample', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(4);
  expect(endState['todoListId2'][3].id).toBeDefined();
  expect(endState['todoListId2'][3].title).toBe('new task sample');
  expect(endState['todoListId2'][3].isDone).toBeFalsy();
});

test('correct task should be able to change its title', () => {
  const startState: TasksState = {
    todoListId1: [
      { id: '1', title: '1st sample', isDone: false },
      { id: '2', title: '2nd sample', isDone: false },
      { id: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'sample 1', isDone: false },
      { id: '2', title: 'sample 2', isDone: false },
      { id: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = changeTaskTitleAC('changed task title', '3', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId1'][2].title).toBe('3rd sample');
  expect(endState['todoListId2'][2].title).toBe('changed task title');
});

test('correct task should be able to change its status', () => {
  const startState: TasksState = {
    todoListId1: [
      { id: '1', title: '1st sample', isDone: false },
      { id: '2', title: '2nd sample', isDone: false },
      { id: '3', title: '3rd sample', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'sample 1', isDone: false },
      { id: '2', title: 'sample 2', isDone: false },
      { id: '3', title: 'sample 3', isDone: false },
    ],
  };

  const action = changeTaskStatusAC(true, '3', 'todoListId2');

  const endState = tasksReducer(startState, action);

  expect(endState['todoListId2'][2].isDone).toBeTruthy();
  expect(endState['todoListId1'][2].isDone).toBeFalsy();
});
