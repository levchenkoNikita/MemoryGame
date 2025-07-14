import { useState, useMemo } from "react";
import ComplexityButton from "../button/ComplexityButton";
import ButtonStateGame from "../button/ButtonStateGame";

const LayerStart = function ({ onClickComplexityButton, stateClass, onClickPlayButton }) {
    const gridMap = [
        { id: 1, value: 2, isActive: false },
        { id: 2, value: 4, isActive: false },
        { id: 3, value: 6, isActive: false }
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

    return (
        <div className={`
                text-[#FDD8A8] w-[80%] h-[80%] absolute top-[50%] left-[50%]
                translate-[-50%] bg-[#641F16] flex flex-col items-center
                justify-center gap-y-[45px] rounded-[37px] duration-[0.8s]
                ${stateClass ? '' : 'translate-y-[100%]'}
            `}>
            <h2 className="text-[100px] text-center select-none">Answers hidden behind this layer</h2>
            <div className="text-[50px] flex flex-col items-center gap-y-[20px]">
                <h3 className="select-none">Choose the complexity:</h3>
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