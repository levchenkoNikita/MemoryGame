import {  useState } from "react";
import CardList from "./CardList";
import LayerStart from "./UI/layers/LayerStart";
import LayerEnd from "./UI/layers/LayerEnd";

function DownSurface( { onClickPlayButton, isStartPlay, isEndPlay } ) {
    const [gridCards, setGridCards] = useState(2);
    const [isActiveLS, setIsActiveLS] = useState(true);
    const [isActiveLE, setIsActiveLE] = useState(false);
    const [isWin, setIsWin] = useState(false);

    function handleComplexityButton(value) {
        setGridCards(value);
    }
    
    function handlePlayButton() {
        setIsActiveLS(false);
        onClickPlayButton();
    }

    function handleRestartButton() {
        setIsActiveLS(true);
        setIsActiveLE(false);
        setIsWin(false);

        isEndPlay();
    }

    return (
        <div className="
                h-[80%] bg-[url('/down-bg.png')] bg-center bg-cover
                bg-no-repeat flex items-center justify-center relative overflow-hidden
            ">

            {
                isStartPlay 
                ? <CardList grid={gridCards} setIsWin={(res) => setIsWin(res)} isActiveLE={isActiveLE} setIsActiveLE={() => setIsActiveLE(true)}/>
                : null
            }
            
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