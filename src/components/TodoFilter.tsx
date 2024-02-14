import { Button } from '@mui/material';
import { TodoFilterProps } from '../types/types';

export const TodoFilter: React.FC<TodoFilterProps> = ({
  todoListId,
  changeTodoListFilter,
  filter,
}: TodoFilterProps) => {
  const onAllClickHandler = () => {
    changeTodoListFilter(todoListId, 'all');
  };
  const onActiveClickHandler = () => {
    changeTodoListFilter(todoListId, 'active');
  };
  const onCompletedClickHandler = () => {
    changeTodoListFilter(todoListId, 'completed');
  };

  //TODO: style for active btn
  return (
    <div>
      <Button
        variant={filter === 'all' ? 'contained' : 'text'}
        onClick={onAllClickHandler}
      >
        all{' '}
      </Button>
      <Button
        variant={filter === 'active' ? 'contained' : 'text'}
        color={'primary'}
        onClick={onActiveClickHandler}
      >
        active
      </Button>
      <Button
        variant={filter === 'completed' ? 'contained' : 'text'}
        color={'secondary'}
        onClick={onCompletedClickHandler}
      >
        completed
      </Button>
    </div>
  );
};
