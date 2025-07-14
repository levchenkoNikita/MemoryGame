const ComplexityButton = ({ grid, isActive, onChangeStateComplexityButton, id }) => {
    return (
        <li>
            <button
                id={id}
                className={`
                    w-[100px] h-[100px] flex items-center justify-center border-[2px] 
                    border-solid rounded-[10px]
                    ${isActive ? 'border-current' : 'border-transparent'}
                `}
                value={grid}
                onClick={(event) => onChangeStateComplexityButton(event)}
            >
                {grid}x{grid}
            </button>
        </li>
    );
};

export default ComplexityButton;