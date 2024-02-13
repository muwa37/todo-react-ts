import { TodoListProps } from "../types/types";
import { TodoFilter } from "./TodoFilter";
import { AddItemForm } from "./AddItemForm";
import { TodoItem } from "./TodoItem";
import { EditableSpan } from "./EditableSpan";
import { Grid, IconButton, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";

export const TodoList: React.FC<TodoListProps> = ({
  id,
  todoListId,
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  removeTodoList,
  changeTaskTitle,
  changeTodoListTitle,
  filter,
}: TodoListProps) => {
  const removeHandler = () => {
    removeTodoList(todoListId);
  };

  const addTaskHandler = (title: string) => {
    addTask(title, id);
  };

  const changeTodoListTitleHandler = (title: string) => {
    changeTodoListTitle(todoListId, title);
  };

  return (
    <Grid item>
      <Paper style={{ padding: "10px" }}>
        <h3>
          <EditableSpan
            title={title}
            changeTitle={changeTodoListTitleHandler}
          />
          <IconButton onClick={removeHandler}>
            <Delete />
          </IconButton>
        </h3>

        <AddItemForm addItem={addTaskHandler} />
        <div>
          {tasks.map((task) => (
            <TodoItem
              todoListId={todoListId}
              key={task.id}
              id={task.id}
              title={task.title}
              isDone={task.isDone}
              removeTask={removeTask}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
            />
          ))}
        </div>
        <TodoFilter
          todoListId={todoListId}
          id={id}
          changeFilter={changeFilter}
          filter={filter}
        />
      </Paper>
    </Grid>
  );
};
