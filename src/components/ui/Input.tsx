import { InputProps } from '../../types/types';

export const Input: React.FC<InputProps> = ({
	placeholder,
	value,
	onChange,
	onKeyPress,
}: InputProps) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyPress={onKeyPress}
		/>
	);
};
