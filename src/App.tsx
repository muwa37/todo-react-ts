import { Container, Grid } from '@mui/material';
import React, { useReducer } from 'react';
import { v1 } from 'uuid';
import { AddItemForm } from './components/AddItemForm';
import { ButtonAppBar } from './components/ButtonAppBar';
import { TodoLists } from './components/TodoLists';
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from './state/tasks/tasks-action-creators';
import { tasksReducer } from './state/tasks/tasks-reducer';
import {
  addTodoListAC,
  changeTodoListFilterAC,
  changeTodoListTitleAC,
  removeTodoListAC,
} from './state/todo-lists/todolists-action-creators';
import { todoListsReducer } from './state/todo-lists/todolists-reducer';
import { FilterValues } from './types/types';

export const App: React.FC = () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const [tasks, dispatchToTasksReducer] = useReducer(tasksReducer, {
    [todoListId1]: [
      {
        taskId: v1(),
        title: 'todo 1st sample',
        isDone: true,
      },
      {
        taskId: v1(),
        title: 'todo 2nd sample',
        isDone: false,
      },
      {
        taskId: v1(),
        title: 'todo 3rd sample',
        isDone: true,
      },
    ],
    [todoListId2]: [
      {
        taskId: v1(),
        title: 'todo 4st sample',
        isDone: true,
      },
      {
        taskId: v1(),
        title: 'todo 5nd sample',
        isDone: false,
      },
    ],
  });

  const [todoLists, dispatchToTodoListsReducer] = useReducer(todoListsReducer, [
    { id: todoListId1, title: '1st todo list title', filter: 'active' },
    { id: todoListId2, title: '2nd todo list title', filter: 'completed' },
  ]);

  const removeTask = (taskId: string, todoListId: string) => {
    dispatchToTasksReducer(removeTaskAC(taskId, todoListId));
  };

  const addTask = (title: string, todoListId: string) => {
    dispatchToTasksReducer(addTaskAC(title, todoListId));
  };

  const changeTaskStatus = (
    isDone: boolean,
    taskId: string,
    todoListId: string
  ) => {
    dispatchToTasksReducer(changeTaskStatusAC(isDone, taskId, todoListId));
  };

  const changeTaskTitle = (
    newTitle: string,
    taskId: string,
    todoListId: string
  ) => {
    dispatchToTasksReducer(changeTaskTitleAC(newTitle, taskId, todoListId));
  };

  const removeTodoList = (todoListId: string) => {
    const action = removeTodoListAC(todoListId);
    dispatchToTodoListsReducer(action);
    dispatchToTasksReducer(action);
  };

  const addTodoList = (title: string) => {
    const action = addTodoListAC(title);
    dispatchToTodoListsReducer(action);
    dispatchToTasksReducer(action);
  };

  const changeTodoListFilter = (todoListId: string, filter: FilterValues) => {
    dispatchToTodoListsReducer(changeTodoListFilterAC(todoListId, filter));
  };

  const changeTodoListTitle = (todoListId: string, title: string) => {
    dispatchToTodoListsReducer(changeTodoListTitleAC(todoListId, title));
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
