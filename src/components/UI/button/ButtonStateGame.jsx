const ButtonStateGame = ({ onClick, children }) => {
    return (
        <button
            className=" w-[100px] h-[50px] border-[1px] border-solid rounded-[6px]"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonStateGame;