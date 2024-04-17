import { useEffect, useState } from 'react';
import { todoListsAPI } from '../api/todolists-api';

export default {
  title: 'API',
};

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': process.env.API_KEY,
  },
};

export const GetTodoLists = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    todoListsAPI.getTodoLists().then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTodoLists = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    todoListsAPI.createTodoList('sample todo list').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTodoLists = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    todoListsAPI.deleteTodoList('0').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodoListsTitle = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    todoListsAPI.updateTodoList('1', 'sample changed title').then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
