interface IButtonProps {
    text: string
    onClick?: () => void;
}

export const Button:React.FC<IButtonProps> = ({text, onClick}:IButtonProps) => {
    return(
        <button
            onClick={onClick}
        >
            {text}
        </button>
    )
}