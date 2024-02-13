import { FilterValues } from "./types";

export type Action1 = {
  type: "1";
  todoListId: string;
};

export type Action2 = {
  type: "2";
  title: string;
};



export type Actions =
  | Action1
  | Action2;
