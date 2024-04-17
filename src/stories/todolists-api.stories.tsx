import { FC, useEffect, useState } from 'react';
import { todoListsAPI } from '../api/todolists-api';
import {
  GetTasksResponse,
  Response,
  TodoListType,
} from '../types/todolists-api';

export default {
  title: 'API',
};

export const GetTodoLists: FC = () => {
  const [state, setState] = useState<TodoListType[] | null>(null);
  useEffect(() => {
    todoListsAPI.getTodoLists().then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTodoLists: FC = () => {
  const [state, setState] = useState<Response<{ item: TodoListType }> | null>(
    null
  );
  useEffect(() => {
    todoListsAPI.createTodoList('sample todo list').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTodoLists: FC = () => {
  const [state, setState] = useState<Response | null>(null);
  useEffect(() => {
    todoListsAPI.deleteTodoList('0').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodoListsTitle: FC = () => {
  const [state, setState] = useState<Response | null>(null);
  useEffect(() => {
    todoListsAPI.updateTodoList('1', 'sample changed title').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const GetTasks: FC = () => {
  const [state, setState] = useState<GetTasksResponse | null>(null);
  useEffect(() => {
    todoListsAPI.getTasks('2').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTask: FC = () => {
  const [state, setState] = useState<Response | null>(null);
  useEffect(() => {
    todoListsAPI.deleteTask('3', '0').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
