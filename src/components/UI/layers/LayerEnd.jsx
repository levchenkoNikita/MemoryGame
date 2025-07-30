import ButtonStateGame from "../button/ButtonStateGame";

const LayerEnd = ({ isWin, stateClass, onClick }) => {
    return (
        <div className={`
                text-text text-3xl size-le-clamp absolute top-[50%] left-[50%]
                translate-[-50%] bg-layers flex flex-col items-center
                justify-center gap-y-[26px] rounded-[20px] duration-800
                ${stateClass ? '' : 'translate-y-[180%]'}
            `}>
            {isWin
                ? <h1 className="text-[30px] text-center select-none">You win!</h1>
                : <h1 className="text-[30px] text-center select-none">You lose!</h1>
            }
            <ButtonStateGame onClick={onClick}>Restart</ButtonStateGame>
        </div>
    );
}

export default LayerEnd;