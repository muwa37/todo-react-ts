import axios from 'axios';
import { useEffect, useState } from 'react';

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
    axios.get(process.env.API_URL + '/todo-lists', settings).then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTodoLists = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .post(
        process.env.API_URL + '/todo-lists',
        { title: 'sample Todo List' },
        settings
      )
      .then(res => {
        setState(res.data);
      });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTodoLists = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios.delete(process.env.API_URL + '/todo-lists/0', settings).then(res => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodoListsTitle = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .put(
        process.env.API_URL + '/todo-lists/1',
        { title: 'sample changed title' },
        settings
      )
      .then(res => {
        setState(res.data);
      });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
