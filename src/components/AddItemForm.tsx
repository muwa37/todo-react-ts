import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AddItemFormProps } from "../types/types";
import { IconButton, TextField } from "@mui/material";
import { ControlPoint } from '@mui/icons-material';

export const AddItemForm: React.FC<AddItemFormProps> = ({
  addItem,
}: AddItemFormProps) => {
  const [title, setNewTaskTitle] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const addValidatedItem = () => {
    if (title.trim() === "") {
      setTitleError("title required");
      return;
    }
    addItem(title);
    setNewTaskTitle("");
  };

  //TODO: separate handlers

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };
  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setTitleError(null);
    if (e.key === "Enter") {
      addValidatedItem();
      setNewTaskTitle("");
    }
  };
  const onClickHandler = () => {
    addValidatedItem();
    setNewTaskTitle("");
  };

  //TODO: debounce on change
  return (
    <div>
      <TextField
        value={title}
        variant={"outlined"}
        label={"type value"}
        onChange={onChangeHandler}
        onKeyPress={onEnterPressHandler}
        error={!!titleError}
        helperText={titleError}
      />
      <IconButton onClick={onClickHandler} color={'primary'}>
        <ControlPoint/>
      </IconButton>
    </div>
  );
};
