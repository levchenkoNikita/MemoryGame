import ButtonStateGame from "../button/ButtonStateGame";

const LayerEnd = ({isWin, stateClass, onClick}) => {
    return (
        <div className={`
                text-[#FDD8A8] text-[50px] h-[50%] aspect-[1] absolute top-[50%] left-[50%]
                translate-[-50%] bg-[#641F16] flex flex-col items-center
                justify-center gap-y-[45px] rounded-[37px] duration-[0.8s]
                ${stateClass ? '' : 'translate-y-[100%]'}
            `}>
            {isWin
                ? <h1 className="text-[100px] text-center select-none">You win!</h1>
                : <h1 className="text-[100px] text-center select-none">You lose!</h1>
            }
            <ButtonStateGame onClick={onClick}>Restart</ButtonStateGame>
        </div>
    );
}

export default LayerEnd;