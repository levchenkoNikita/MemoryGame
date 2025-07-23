const ComplexityButton = ({ grid, isActive, onChangeStateComplexityButton, id }) => {
    return (
        <li>
            <button
                id={id}
                className={`
                    w-[40px] aspect-[1] flex items-center justify-center border-[1px] 
                    border-solid rounded-[6px]
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