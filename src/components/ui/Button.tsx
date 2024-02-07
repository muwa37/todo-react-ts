import { ButtonProps } from "../../types/types";

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
}: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};
