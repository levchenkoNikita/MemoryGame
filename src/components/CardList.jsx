import React, { useState } from "react";
import CardItem from "./UI/card/CardItem";

const CardList = function ({ grid }) {
    const [cardGrid, setCardGrid] = useState([
        <CardItem />,
        <CardItem />
    ]);

    const gridClasses = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
    };

    const gridCol = gridClasses[grid]

    return (
        <div className={`
                h-[80%] aspect-[1] grid ${gridCol} place-items-center gap-[24px] bg-[red]
                p-[20px]
            `}>
            <CardItem grid={grid}/>
            <CardItem grid={grid}/>
            <CardItem grid={grid}/>
            <CardItem grid={grid}/>
        </div>
    );
}

export default CardList;