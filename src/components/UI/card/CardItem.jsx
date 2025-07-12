import React, { useState } from "react";

function CardItem({ id, imageBg, imageFr }) {
    const [isActive, setIsActive] = useState(true);
    const [isAside, setIsAside] = useState(false);

    return (
        <button
            id={id}
            className={`
                aspect-[1] w-full bg-white p-[20px] flex center justify-center rounded-[16px]
            `}
            type="button">

            <div
                className={`
                    rounded-[8px] bg-center bg-no-repeat
                    ${isActive ? `${imageBg} w-full aspect-[1] bg-cover` : `${imageFr} w-[50%] aspect-[1] bg-contain`} 
                `}
            >
                
            </div>

        </button>

        // Сделать две кнопки(через тернарный оператор) и если состояние isAside true то кнопка с карточкой-фронт исчезает и появляется боковая сторона карточки
    )
}

export default CardItem;