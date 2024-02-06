import { IButtonProps } from '../../types/types'


export const Button:React.FC<IButtonProps> = ({text, onClick}:IButtonProps) => {
    return(
        <button
            onClick={onClick}
        >
            {text}
        </button>
    )
}