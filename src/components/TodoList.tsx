import { Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from '../state/reducers/tasks-reducer/tasks-action-creators';
import {
  changeTodoListTitleAC,
  removeTodoListAC,
} from '../state/reducers/todo-lists-reducer/todolists-action-creators';
import { AppRootState } from '../types/store-types';
import { Task, TodoListProps } from '../types/types';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
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

  const removeTask = (taskId: string, todoListId: string) => {
    dispatch(removeTaskAC(taskId, todoListId));
  };

  const changeTaskStatus = (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => {
    dispatch(changeTaskStatusAC(isDone, taskId, todoListId));
  };

  const changeTaskTitle = (
    newTitle: string,
    taskId: string,
    todoListId: string
  ) => {
    dispatch(changeTaskTitleAC(newTitle, taskId, todoListId));
  };

  const removeHandler = () => {
    dispatch(removeTodoListAC(todoListId));
  };

  const addTaskHandler = (title: string) => {
    dispatch(addTaskAC(title, todoListId));
  };

  const changeTodoListTitleHandler = (title: string) => {
    dispatch(changeTodoListTitleAC(todoListId, title));
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
          {filteredTasks.map(task => (
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
        <TodoFilter todoListId={todoListId} filter={filter} />
      </Paper>
    </Grid>
  );
};
