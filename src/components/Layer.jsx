import React from "react";
import { useState } from "react";
import ComplexityButton from "./UI/button/ComplexityButton";

const Layer = React.forwardRef(function ({ onClickComplexityButton, stateClass, onClickPlayButton }, ref) {
    const [gridMap, setGridMap] = useState([
        { id: Date.now(), value: 2 },
        { id: Date.now(), value: 3 },
        { id: Date.now(), value: 4 },
        { id: Date.now(), value: 5 }
    ]);



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
                    {gridMap.map((element, index) => (
                        index === 0
                            ?
                            (<ComplexityButton
                                ref={ref}
                                key={element.id + index}
                                grid={element.value}
                                onClickComplexityButton={onClickComplexityButton}
                            />)
                            :
                            <ComplexityButton
                                ref={ref}
                                key={element.id + index}
                                grid={element.value}
                                onClickComplexityButton={onClickComplexityButton}
                            />
                    ))}
                </ul>
                <button className="mt-[20px] w-[200px] h-[100px] border-[2px] border-solid rounded-[10px]" onClick={onClickPlayButton}>Play</button>
            </div>
        </div>
    )
});

export default Layer;