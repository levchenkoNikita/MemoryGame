import React from "react";

const ComplexityButton = React.forwardRef(({ grid, onClickComplexityButton, isActive}, ref) => {
    console.log(isActive)

    return (
        <li>
            <button ref={ref} className={`
            w-[100px] h-[100px] flex items-center justify-center border-[2px] 
            border-solid rounded-[10px]
            ${isActive ? 'border-current' : 'border-transparent'}
            `} value={grid} onClick={(event) => onClickComplexityButton(event)}>
                {grid}x{grid}
            </button>
        </li>
    );
});

export default ComplexityButton;