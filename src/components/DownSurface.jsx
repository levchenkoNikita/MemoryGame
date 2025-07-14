import React, { createContext, useState } from "react";
import CardList from "./CardList";
import LayerStart from "./UI/layers/LayerStart";
import LayerEnd from "./UI/layers/LayerEnd";

const winContext = createContext();

function DownSurface() {
    const [gridCards, setGridCards] = useState(2);
    const [isActiveLS, setIsActiveLS] = useState(true);
    const [isActiveLE, setIsActiveLE] = useState(false);
    const [isWin, setIsWin] = useState(false);

    function handleComplexityButton(value) {
        setGridCards(value);
    }

    function handlePlayButton() {
        setIsActiveLS(false);
    }

    function handleRestartButton() {
        setIsActiveLS(true);
        setIsActiveLE(false);
        setIsWin(false);
    }

    return (
        <div className="
                h-[80%] bg-[url('../assets/images/down-bg.png')] bg-[center] bg-[cover]
                bg-[no-repeat] flex items-center justify-center relative overflow-hidden
            ">

            <winContext.Provider value={{ setIsWin, setIsActiveLE }}>
                <CardList grid={gridCards} />
            </winContext.Provider>

            <LayerStart
                onClickComplexityButton={handleComplexityButton}
                onClickPlayButton={handlePlayButton}
                stateClass={isActiveLS}
            />

            <LayerEnd stateClass={isActiveLE} isWin={isWin} onClick={handleRestartButton} />
        </div>
    )
}

export default DownSurface;
export { winContext };