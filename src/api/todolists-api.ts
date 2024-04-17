import axios from 'axios';
import {
  GetTasksResponse,
  Response,
  TodoListType,
} from '../types/todolists-api';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': process.env.API_KEY,
  },
};

const instance = axios.create({
  baseURL: process.env.API_URL,
  ...settings,
});

export const todoListsAPI = {
  getTodoLists() {
    return instance.get<TodoListType[]>(' /todo-lists');
  },

  createTodoList(title: string) {
    return instance.post<Response<{ item: TodoListType }>>('/todo-lists', {
      title,
    });
  },

  deleteTodoList(id: string) {
    return instance.delete<Response>(`/todo-lists/${id}`);
  },

  updateTodoList(id: string, title: string) {
    return instance.put<Response>(`/todo-lists/${id}`, { title });
  },

  getTasks(todoListId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists${todoListId}/tasks`);
  },

  deleteTask(todoListId: string, taskId: string) {
    return instance.delete<Response>(`/todo-lists${todoListId}/tasks${taskId}`);
  },
};
