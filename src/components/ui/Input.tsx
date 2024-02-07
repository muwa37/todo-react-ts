import { InputProps } from "../../types/types";

export const Input: React.FC<InputProps> = ({ placeholder }: InputProps) => {
  return <input type="text" placeholder={placeholder} />;
};
