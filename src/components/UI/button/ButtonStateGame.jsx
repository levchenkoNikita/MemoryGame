const ButtonStateGame = ({ onClick, children }) => {
    return ( // w-[100px] h-[50px] rounded-[6px]
        <button
            className="size-pb-clamp border-[1px] border-solid "
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonStateGame;