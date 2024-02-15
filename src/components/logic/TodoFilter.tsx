import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoListFilterAC } from '../../state/reducers/todo-lists-reducer/todolists-action-creators';
import { FilterValues } from '../../types/common-types';
import { TodoFilterProps } from '../../types/props-types';

export const TodoFilter: React.FC<TodoFilterProps> = ({
  todoListId,
  filter,
}: TodoFilterProps) => {
  const dispatch = useDispatch();

  const changeTodoListFilter = useCallback(
    (todoListId: string, filter: FilterValues) => {
      dispatch(changeTodoListFilterAC(todoListId, filter));
    },
    []
  );

  const onAllClickHandler = useCallback(() => {
    changeTodoListFilter(todoListId, 'all');
  }, [todoListId, changeTodoListFilter]);
  const onActiveClickHandler = useCallback(() => {
    changeTodoListFilter(todoListId, 'active');
  }, [todoListId, changeTodoListFilter]);
  const onCompletedClickHandler = useCallback(() => {
    changeTodoListFilter(todoListId, 'completed');
  }, [todoListId, changeTodoListFilter]);

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
