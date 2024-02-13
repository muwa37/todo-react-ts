import { todoListsReducer } from "./todolists-reducer";
import { v1 } from "uuid";
import { FilterValues, TodoList } from "../../types/types";
import {
  AddTodoListAC,
  ChangeTodoListFilterAC,
  ChangeTodoListTitleAC,
  RemoveTodoListAC,
} from "./todolists-action-creators";

test("correct todoList should be removed", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const startState: TodoList[] = [
    { id: todoListId1, title: "1st todo list", filter: "all" },
    { id: todoListId2, title: "2nd todo list", filter: "all" },
  ];

  const endState = todoListsReducer(startState, RemoveTodoListAC(todoListId1));
  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todoListId2);
});

test("correct todoList should be added", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newTodoListTitle = "new todo list";

  const startState: TodoList[] = [
    { id: todoListId1, title: "1st todo list", filter: "all" },
    { id: todoListId2, title: "2nd todo list", filter: "all" },
  ];

  const endState = todoListsReducer(
    startState,
    AddTodoListAC(newTodoListTitle)
  );

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodoListTitle);
  expect(endState[2].filter).toBe("all");
});

test("correct todoList should be able to change its name", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newTodoListTitle = "new todo list";

  const startState: TodoList[] = [
    { id: todoListId1, title: "1st todo list", filter: "all" },
    { id: todoListId2, title: "2nd todo list", filter: "all" },
  ];

  const endState = todoListsReducer(
    startState,
    ChangeTodoListTitleAC(todoListId2, newTodoListTitle)
  );

  expect(endState[0].title).toBe("1st todo list");
  expect(endState[1].title).toBe(newTodoListTitle);
});

test("correct filter of todoList should be changed", () => {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const newFilter: FilterValues = "completed";

  const startState: TodoList[] = [
    { id: todoListId1, title: "1st todo list", filter: "all" },
    { id: todoListId2, title: "2nd todo list", filter: "all" },
  ];

  const endState = todoListsReducer(
    startState,
    ChangeTodoListFilterAC(todoListId2, newFilter)
  );

  expect(endState[0].filter).toBe("all");
  expect(endState[1].filter).toBe(newFilter);
});
