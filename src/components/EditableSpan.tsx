import { ChangeEvent, useState } from "react";
import { EditableSpanProps } from "../types/types";
import { Input } from "./ui/Input";

export const EditableSpan: React.FC<EditableSpanProps> = ({
  title,
  changeTitle
}: EditableSpanProps) => {
  const [editMode, setEditMode] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const activateEditMode = () => {
    setEditMode(true);
    setInputTitle(title)
  };
  const activateViewMode = () => {setEditMode(false);
    changeTitle(inputTitle)
}
  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.currentTarget.value);
  };

  return editMode ? (
    <Input
      value={inputTitle}
      onChange={onChangeTitleHandler}
      onBlur={activateViewMode}
      autoFocus={true}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{title}</span>
  );
};
