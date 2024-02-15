import { Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  changeTodoListFilterAC,
  removeTodoListAC,
} from '../state/reducers/todo-lists-reducer/todolists-action-creators';
import { FilterValues, TodoListProps } from '../types/types';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
  todoListId,
  title,
  tasks,
  removeTask,
  addTask,
  changeTaskStatus,
  changeTaskTitle,
  changeTodoListTitle,
  filter,
}: TodoListProps) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeTodoListAC(todoListId));
  };

  const changeTodoListFilter = (todoListId: string, filter: FilterValues) => {
    dispatch(changeTodoListFilterAC(todoListId, filter));
  };

  const addTaskHandler = (title: string) => {
    addTask(title, todoListId);
  };

  const changeTodoListTitleHandler = (title: string) => {
    changeTodoListTitle(todoListId, title);
  };

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
          {tasks.map(task => (
            <TodoItem
              todoListId={todoListId}
              key={task.id}
              id={task.id}
              title={task.title}
              isDone={task.isDone}
              removeTask={removeTask}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
            />
          ))}
        </div>
        <TodoFilter
          todoListId={todoListId}
          changeTodoListFilter={changeTodoListFilter}
          filter={filter}
        />
      </Paper>
    </Grid>
  );
};
