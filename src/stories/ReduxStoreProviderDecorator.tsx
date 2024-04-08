import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { v1 } from 'uuid';
import { tasksReducer } from '../state/reducers/tasks-reducer/tasks-reducer';
import { todoListsReducer } from '../state/reducers/todo-lists-reducer/todolists-reducer';
import { AppRootState } from '../state/store';

const rootReducer = combineReducers({
  todoListsReducer,
  tasksReducer,
});

const initialGlobalState = {
  todoListsReducer: [
    { id: 'todoListId1', title: 'todo list sample 1', filter: 'all' },
    { id: 'todoListId2', title: 'todo list sample 2', filter: 'all' },
  ],
  tasksReducer: {
    ['todoListId1']: [
      { id: v1(), title: 'example task 1', isDone: true },
      { id: v1(), title: 'example task 2', isDone: false },
    ],
    ['todoListId2']: [
      { id: v1(), title: 'example task 3', isDone: false },
      { id: v1(), title: 'example task 4', isDone: true },
    ],
  },
};

//@ts-ignore
const storyBookState = createStore(
  rootReducer,
  initialGlobalState as AppRootState
);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
  return <Provider store={storyBookState}>{storyFn()}</Provider>;
};
