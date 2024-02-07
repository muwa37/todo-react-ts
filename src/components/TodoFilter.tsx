import { TodoFilterProps } from "../types/types";
import { Button } from "./ui/Button";

export const TodoFilter: React.FC<TodoFilterProps> = ({
  changeFilter,
}: TodoFilterProps) => {
  return (
    <div>
      <Button text="all" onClick={() => changeFilter("all")} />
      <Button text="active" onClick={() => changeFilter("active")} />
      <Button text="completed" onClick={() => changeFilter("completed")} />
    </div>
  );
};
