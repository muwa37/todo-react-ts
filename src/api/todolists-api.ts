import axios from 'axios';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': process.env.API_KEY,
  },
};

export const todoListsAPI = {
  getTodoLists() {
    return axios.get(`${process.env.API_URL}/todo-lists`, settings);
  },

  createTodoList(title: string) {
    return axios.post(`${process.env.API_URL}/todo-lists`, { title }, settings);
  },

  deleteTodoList(id: string) {
    return axios.delete(`${process.env.API_URL}/todo-lists/${id}`, settings);
  },

  updateTodoList(id: string, title: string) {
    return axios.put(
      `${process.env.API_URL}/todo-lists/${id}`,
      { title },
      settings
    );
  },
};
