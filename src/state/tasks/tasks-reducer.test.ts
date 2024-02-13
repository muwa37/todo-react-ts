import { tasksReducer } from './tasks-reducer';
import { TasksState } from '../../types/types';

test('correct task should be deleted from correct array', () => {
    const startState:TasksState = {
        'todoListId1': [
            {id: '1', title: '1st sample', isDone: false},
            {id: '2', title: '2nd sample', isDone: false},
            {id: '3', title: '3rd sample', isDone: false},
        ],
        'todoListId2': [
            {id: '1', title: 'sample 1', isDone: false},
            {id: '2', title: 'sample 2', isDone: false},
            {id: '3', title: 'sample 3', isDone: false},
        ]
    }

    const action = removeTaskAC('2', 'todoListId2');

    const endState = tasksReducer(startState, action);

    expect (endState['todoListId1'].length).toBe(3);
    expect (endState['todoListId2'].length).toBe(2);
    expect (endState['todoListId2'].every(t => t.id !== '2')).toBeTruthy();
});