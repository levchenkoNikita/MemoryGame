import UpSurface from './UpSurface';
import DownSurface from './DownSurface';
import { createContext, useState } from 'react';

const countRoundContext = createContext();

function Table() {
    const [countRound, setCountRound] = useState(1);
    const [copyCountRound, setCopyCountRound] = useState(1);
    const [isStartPlay, setIsStartPlay] = useState(false);

    function handleStartPlay() {
        setIsStartPlay(true);
    }

    function handleEndPlay() {
        setIsStartPlay(false);
        setCountRound(copyCountRound);
    }

    return (
        <div className="h-screen font-Stint">
            <countRoundContext.Provider value={ { countRound, setCountRound, setCopyCountRound, isStartPlay, setIsStartPlay} }>
                <UpSurface>

                </UpSurface>
                <DownSurface isStartPlay={isStartPlay} isEndPlay={handleEndPlay} onClickPlayButton={handleStartPlay}>

                </DownSurface>
            </countRoundContext.Provider>
        </div>
    )
}

export default Table;
export { countRoundContext };