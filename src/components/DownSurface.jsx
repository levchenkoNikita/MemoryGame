import React, { useRef, useState } from "react";
import CardList from "./CardList";
import Layer from "./Layer";

function DownSurface() {
    const complexityButtonRef = useRef(null);
    const [gridCards, setGridCards] = useState(3);
    const [isActiveForLayer, setIsActiveForLayer] = useState(true);
    const [isActiveForCard, setIsActiveForCard] = useState(false);
    const [isAside, setIsAside] = useState(true);

    function handleComplexityButton(event) {
        setGridCards(event.target.value);
        console.log("GridCards: ", gridCards)
        console.log("Event.target.value: ", event.target.value)
        complexityButtonRef.current.classList.remove('border-current');
        complexityButtonRef.current.classList.add('border-transparent');
        complexityButtonRef.current = event.target;
        complexityButtonRef.current.classList.add('border-current');
        complexityButtonRef.current.classList.remove('border-transparent');
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
                ref={complexityButtonRef}
                onClickComplexityButton={handleComplexityButton}
                onClickPlayButton={handlePlayButton}
                stateClass={isActiveForLayer}
            />
        </div>
    )
}

export default DownSurface;