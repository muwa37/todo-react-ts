export interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export interface IInputProps {
  placeholder: string;
}

export interface ITodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}

export interface ITodoListProps {
  title: string;
  tasks: ITask[];
}
