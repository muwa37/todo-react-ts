import { Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAC } from '../../state/reducers/tasks-reducer/tasks-action-creators';
import {
  changeTodoListTitleAC,
  removeTodoListAC,
} from '../../state/reducers/todo-lists-reducer/todolists-action-creators';
import { Task } from '../../types/common';
import { TodoListProps } from '../../types/props';
import { AppRootState } from '../../types/store';
import { AddItemForm } from './../common/AddItemForm';
import { EditableSpan } from './../common/EditableSpan';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
  todoListId,
  title,
  filter,
}: TodoListProps) => {
  const dispatch = useDispatch();

  const tasks = useSelector<AppRootState, Task[]>(
    state => state.tasksReducer[todoListId]
  );

  const filteredTasks =
    filter === 'active'
      ? tasks.filter(t => t.isDone === false)
      : filter === 'completed'
        ? tasks.filter(t => t.isDone === true)
        : tasks;

  const removeHandler = useCallback(() => {
    dispatch(removeTodoListAC(todoListId));
  }, [dispatch, todoListId]);

  const addTaskHandler = useCallback(
    (title: string) => {
      dispatch(addTaskAC(title, todoListId));
    },
    [dispatch, todoListId]
  );

  const changeTodoListTitleHandler = useCallback(
    (title: string) => {
      dispatch(changeTodoListTitleAC(todoListId, title));
    },
    [dispatch, todoListId]
  );

  return (
    <Grid item>
      <Paper style={{ padding: '10px' }}>
        <h3>
          <EditableSpan
            title={title}
            changeTitle={changeTodoListTitleHandler}
          />
          <IconButton onClick={removeHandler}>
            <Delete />
          </IconButton>
        </h3>

        <AddItemForm addItem={addTaskHandler} />
        <div>
          {filteredTasks.map(task => (
            <TodoItem
              todoListId={todoListId}
              key={task.id}
              id={task.id}
              title={task.title}
              isDone={task.isDone}
            />
          ))}
        </div>
        <TodoFilter todoListId={todoListId} filter={filter} />
      </Paper>
    </Grid>
  );
};
