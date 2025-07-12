import React, { useState } from "react";
import CardItem from "./UI/card/CardItem";

const CardList = function ({ grid }) {
    const [cardsGrid, setCardsGrid] = useState([
        { id: 1, value: 1, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 2, value: 1, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 3, value: 2, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 4, value: 2, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 5, value: 3, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 6, value: 3, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 7, value: 4, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 8, value: 4, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 9, value: 5, image: 'bg-[url("../assets/icons/birthday.svg")]' }, 
        { id: 10, value: 5, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 11, value: 6, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 12, value: 6, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        
        { id: 13, value: 7, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 14, value: 7, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 15, value: 8, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 16, value: 8, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 17, value: 9, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 18, value: 9, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 19, value: 10, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 20, value: 10, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 21, value: 11, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 22, value: 11, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 23, value: 12, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 24, value: 12, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 25, value: 13, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 26, value: 13, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 27, value: 14, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 28, value: 14, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 29, value: 15, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 30, value: 15, image: 'bg-[url("../assets/icons/birthday.svg")]' },

        { id: 31, value: 16, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 32, value: 16, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 33, value: 17, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 34, value: 17, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 35, value: 18, image: 'bg-[url("../assets/icons/birthday.svg")]' },
        { id: 36, value: 18, image: 'bg-[url("../assets/icons/birthday.svg")]' }
    ]);

    const imageBg = 'bg-[url("../assets/images/card-back.png")]';

    const gridClasses = {
        2: "grid-cols-2",
        4: "grid-cols-4",
        6: "grid-cols-6"
    };

    const gridCol = gridClasses[grid]

    return (
        <div className={`
                h-[80%] aspect-[1] grid ${gridCol} place-items-center gap-[24px] bg-[red]
                p-[20px]
            `}>
            {
                cardsGrid.map((el, index) => {
                    if (index >= (Number(grid) ** 2)) {
                        return null;
                    }
                    return <CardItem
                        key={el.id}
                        id={el.id}
                        imageBg={imageBg}
                        imageFr={el.image}
                    />;
                })
            }
        </div>
    );
}

export default CardList;