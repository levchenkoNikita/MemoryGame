import React, { useRef, useState } from "react";
import CardList from "./CardList";
import Layer from "./Layer";

function DownSurface() {
    const [gridCards, setGridCards] = useState(2);
    const [isActiveForLayer, setIsActiveForLayer] = useState(true);
    const [isActiveForCard, setIsActiveForCard] = useState(false);
    const [isAside, setIsAside] = useState(true);

    function handleComplexityButton(value) {
        setGridCards(value);
    }

    function handlePlayButton() {
        setIsActiveForLayer(false);
    }

    return (
        <div className="
                h-[80%] bg-[url('../assets/images/down-bg.png')] bg-[center] bg-[cover]
                bg-[no-repeat] flex items-center justify-center relative overflow-hidden
            ">
            <CardList grid={gridCards}/>
            <Layer
                onClickComplexityButton={handleComplexityButton}
                onClickPlayButton={handlePlayButton}
                stateClass={isActiveForLayer}
            />
        </div>
    )
}

export default DownSurface;