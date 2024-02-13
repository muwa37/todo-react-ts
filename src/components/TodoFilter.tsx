import { Button } from '@mui/material';
import { TodoFilterProps } from '../types/types';

export const TodoFilter: React.FC<TodoFilterProps> = ({
  id,
  todoListId,
  changeFilter,
  filter,
}: TodoFilterProps) => {
  const onAllClickHandler = () => {
    changeFilter('all', id, todoListId);
  };
  const onActiveClickHandler = () => {
    changeFilter('active', id, todoListId);
  };
  const onCompletedClickHandler = () => {
    changeFilter('completed', id, todoListId);
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
