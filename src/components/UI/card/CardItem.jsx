import React, { useState } from "react";

function CardItem() {
    const [isActive, setIsActive] = useState(true);
    const [isAside, setIsAside] = useState(false);

    return (
        <button className={`aspect-[1] w-full bg-white p-[24px] flex center justify-center rounded-[16px]`} type="button">
            {/* <div 
                className={`
                    w-[152px] h-[152px]  rounded-[8px]
                    ${isAside ? 'hidden' : 
                        isActive ? 'bg-[url("../assets/images/.png")]' : 'bg-[url("../assets/images/card-back.png")]'
                    }
                `}
            >

            </div> */}
        </button>
    )
}

export default CardItem;