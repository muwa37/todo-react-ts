import { Container, Grid } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoListAC } from '../../state/reducers/todo-lists-reducer/todolists-action-creators';
import { TodoListType } from '../../types/common-types';
import { AppRootState } from '../../types/store-types';
import { AddItemForm } from './../common/AddItemForm';
import { TodoList } from './TodoList';

export const TodoLists: React.FC = () => {
  const dispatch = useDispatch();

  const todoLists = useSelector<AppRootState, TodoListType[]>(
    state => state.todoListsReducer
  );

  const addTodoList = useCallback(
    (title: string) => {
      dispatch(addTodoListAC(title));
    },
    [dispatch]
  );

  return (
    <Container>
      <Grid container style={{ padding: '20px' }}>
        <AddItemForm addItem={addTodoList} />
      </Grid>
      <Grid container spacing={5}>
        {todoLists.map(tl => {
          return (
            <TodoList
              todoListId={tl.id}
              key={tl.id}
              title={tl.title}
              filter={tl.filter}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
