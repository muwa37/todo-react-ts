import { IInputProps } from '../../types/types'


export const Input:React.FC<IInputProps> = ({placeholder}:IInputProps) => {
    return(
        <input type="text" placeholder={placeholder} />
    )
}