import { TasksActions } from '../../types/tasks-action-types';
import { TasksState } from '../../types/types';

export const tasksReducer = (
	state: TasksState,
	action: TasksActions
): TasksState => {
	switch (action.type) {
		case 'REMOVE-TASK': {
			state[action.todoListId] = state[action.todoListId].filter(
				t => t.id !== action.taskId
			);
			return { ...state };
		}
		case '2': {
			return { ...state };
		}
		default:
			throw new Error('not valid action type');
	}
};
