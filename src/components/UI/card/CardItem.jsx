import React, { useState } from "react";

function CardItem({ id, value, imageBg, imageFr, onClickCard, isActive }) {
    const [isAside, setIsAside] = useState(false);

    return (
        <button
            className={`
                ${isAside ? '' : 'aspect-[1] w-full bg-white p-[20px] flex center justify-center rounded-[16px]'}
            `}
            type="button"
            disabled={isActive}
            onClick={() => onClickCard(id, value)}
            >

            <div
                className={`
                    rounded-[8px] bg-center bg-no-repeat
                    ${isActive ? `${imageFr} w-[50%] aspect-[1] bg-contain` : `${imageBg} w-full aspect-[1] bg-cover cursor-pointer`} 
                    ${isAside ? 'hidden' : ''}
                `}
            >

            </div>

        </button>
    )
}

export default CardItem;