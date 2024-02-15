import { Container, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemForm } from './components/AddItemForm';
import { ButtonAppBar } from './components/ButtonAppBar';
import { TodoLists } from './components/TodoLists';
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from './state/reducers/tasks-reducer/tasks-action-creators';
import {
  addTodoListAC,
  changeTodoListFilterAC,
  changeTodoListTitleAC,
  removeTodoListAC,
} from './state/reducers/todo-lists-reducer/todolists-action-creators';
import { AppRootState } from './types/store-types';
import { FilterValues, TasksState, TodoList } from './types/types';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const todoLists = useSelector<AppRootState, TodoList[]>(
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

  const removeTodoList = (todoListId: string) => {
    dispatch(removeTodoListAC(todoListId));
  };

  const addTodoList = (title: string) => {
    dispatch(addTodoListAC(title));
  };

  const changeTodoListFilter = (todoListId: string, filter: FilterValues) => {
    dispatch(changeTodoListFilterAC(todoListId, filter));
  };

  const changeTodoListTitle = (todoListId: string, title: string) => {
    dispatch(changeTodoListTitleAC(todoListId, title));
  };

  return (
    <div className='App'>
      <ButtonAppBar />
      <Container>
        <Grid container style={{ padding: '20px' }}>
          <AddItemForm addItem={addTodoList} />
        </Grid>

        <TodoLists
          tasks={tasks}
          todoLists={todoLists}
          changeTaskStatus={changeTaskStatus}
          addTask={addTask}
          changeTodoListFilter={changeTodoListFilter}
          removeTask={removeTask}
          removeTodoList={removeTodoList}
          changeTaskTitle={changeTaskTitle}
          changeTodoListTitle={changeTodoListTitle}
        />
      </Container>
    </div>
  );
};
