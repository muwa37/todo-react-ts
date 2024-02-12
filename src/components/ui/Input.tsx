import { InputProps } from '../../types/types';

export const Input: React.FC<InputProps> = ({
	value,
	onChange,
	onKeyPress,
	onBlur,
	autoFocus
}: InputProps) => {
	return (
		<input
			type='text'
			value={value}
			onChange={onChange}
			onKeyPress={onKeyPress}
			onBlur={onBlur}
			autoFocus={autoFocus}
		/>
	);
};
