import React, { useRef, useState } from "react";
import CardList from "./CardList";
import Layer from "./Layer";

function DownSurface() {
    const complexityButtonRef = useRef(null);
    const [gridCard, setGridCard] = useState(4);
    const [isActive, setIsActive] = useState(true);
    const [isAside, setIsAside] = useState(true);

    function handleComplexityButton(event) {
        setGridCard(event.target.value);
        complexityButtonRef.current.isActive = false;
        complexityButtonRef.current = event.target;
        complexityButtonRef.current.isActive = true;
        console.log(complexityButtonRef.current);
    }


    return (
        <div className="h-[80%] bg-[url('../assets/images/down-bg.png')] bg-[center] bg-[cover] bg-[no-repeat] flex items-center justify-center relative">
            <CardList />
            <Layer ref={complexityButtonRef} onClickForComplexityButton={handleComplexityButton}/>
        </div>
    )
}

export default DownSurface;