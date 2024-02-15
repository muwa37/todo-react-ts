import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from '../state/reducers/tasks-reducer/tasks-action-creators';
import {
  addTodoListAC,
  changeTodoListTitleAC,
} from '../state/reducers/todo-lists-reducer/todolists-action-creators';
import { AppRootState } from '../types/store-types';
import { TasksState, TodoListType } from '../types/types';
import { AddItemForm } from './AddItemForm';
import { TodoList } from './TodoList';

export const TodoLists: React.FC = () => {
  const dispatch = useDispatch();

  const todoLists = useSelector<AppRootState, TodoListType[]>(
    state => state.todoListsReducer
  );
  const tasks = useSelector<AppRootState, TasksState>(
    state => state.tasksReducer
  );

  const removeTask = (taskId: string, todoListId: string) => {
    dispatch(removeTaskAC(taskId, todoListId));
  };

  const addTask = (title: string, todoListId: string) => {
    dispatch(addTaskAC(title, todoListId));
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

  const addTodoList = (title: string) => {
    dispatch(addTodoListAC(title));
  };

  const changeTodoListTitle = (todoListId: string, title: string) => {
    dispatch(changeTodoListTitleAC(todoListId, title));
  };

  return (
    <Container>
      <Grid container style={{ padding: '20px' }}>
        <AddItemForm addItem={addTodoList} />
      </Grid>
      <Grid container spacing={5}>
        {todoLists.map(tl => {
          let filteredTasks = tasks[tl.id];
          if (tl.filter === 'active') {
            filteredTasks = filteredTasks.filter(t => t.isDone === false);
          }
          if (tl.filter === 'completed') {
            filteredTasks = filteredTasks.filter(t => t.isDone === true);
          }
          return (
            <TodoList
              todoListId={tl.id}
              key={tl.id}
              title={tl.title}
              tasks={filteredTasks}
              removeTask={removeTask}
              addTask={addTask}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
              changeTodoListTitle={changeTodoListTitle}
              filter={tl.filter}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
