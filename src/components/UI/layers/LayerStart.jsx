import { useState, useMemo } from "react";
import ComplexityButton from "../button/ComplexityButton";
import ButtonStateGame from "../button/ButtonStateGame";

const LayerStart = function ({ onClickComplexityButton, stateClass, onClickPlayButton }) {
    const gridMap = [
        { id: 100, value: 2, isActive: false },
        { id: 101, value: 4, isActive: false },
        { id: 102, value: 6, isActive: false }
    ];
    
    const [activeObject, setActiveObject] = useState(gridMap[0].id);

    const realGridMap = useMemo(() => {
        return gridMap.map(el => {
            return {
                ...el,
                isActive: Number(el.id) === activeObject
            }
        })
    }, [gridMap, activeObject]);

    const handleStateComplexityButton = (event) => {
        setActiveObject(Number(event.target.id));
        onClickComplexityButton(event.target.value);
    }

    return ( //max-w-[800px] w-full max-h-[800px] h-[80%]
        <div className={`
                text-text w-clamp h-clamp absolute top-[50%] left-[50%]
                translate-[-50%] bg-layers flex flex-col items-center
                justify-center gap-y-[30px] rounded-3xl duration-800
                ${stateClass ? '' : 'translate-y-[100%]'}
            `}>
            <h2 className="text-clamp-ah2 text-center select-none">Answers hidden behind this layer</h2>
            <div className="text-clamp-cb flex flex-col items-center gap-clamp">
                <h3 className="text-clamp-cc3 select-none">Choose the complexity:</h3>
                <ul className="flex items-center justify-center flex-wrap gap-x-[30px]">
                    {realGridMap.map((element) => (
                        <ComplexityButton
                            key={element.id}
                            id={element.id}
                            grid={element.value}
                            isActive={element.isActive}
                            onChangeStateComplexityButton={(event) => handleStateComplexityButton(event)}
                        />
                    ))}
                </ul>
                <ButtonStateGame onClick={onClickPlayButton}>Play</ButtonStateGame>
            </div>
        </div>
    )
};

export default LayerStart;