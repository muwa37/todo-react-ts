import { Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';
import { TodoListProps } from '../types/types';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
  id,
  todoListId,
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  removeTodoList,
  changeTaskTitle,
  changeTodoListTitle,
  filter,
}: TodoListProps) => {
  const removeHandler = () => {
    removeTodoList(todoListId);
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
          id={id}
          changeFilter={changeFilter}
          filter={filter}
        />
      </Paper>
    </Grid>
  );
};
