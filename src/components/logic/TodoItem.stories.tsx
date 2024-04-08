import { ReduxStoreProviderDecorator } from '../../stories/ReduxStoreProviderDecorator';
import { TodoItem } from './TodoItem';

export default {
  title: 'Todo Item component',
  component: TodoItem,
  decorators: [ReduxStoreProviderDecorator],
};

export const TodoItemBaseExample = () => {
  return (
    <>
      <TodoItem
        id='1'
        todoListId='todoListId1'
        title='not done task sample'
        isDone={false}
      />
      <TodoItem
        id='2'
        todoListId='todoListId1'
        title='done task sample'
        isDone={true}
      />
    </>
  );
};
