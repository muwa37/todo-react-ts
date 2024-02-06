import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const TodoInput: React.FC = () => {
  return (
    <div>
      <Input placeholder="todo name" />
      <Button text="add" />
    </div>
  );
};
