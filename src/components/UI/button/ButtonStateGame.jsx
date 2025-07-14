import React, { useState } from "react";

const ButtonStateGame = ({ onClick, children }) => {
    return (
        <button
            className="mt-[20px] w-[200px] h-[100px] border-[2px] border-solid rounded-[10px]"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonStateGame;