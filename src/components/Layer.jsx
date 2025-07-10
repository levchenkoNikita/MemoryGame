import React from "react";
import { useState } from "react";
import ComplexityButton from "./UI/button/ComplexityButton";

const Layer = React.forwardRef(function ({ onClickForComplexityButton }, ref) {
    const [gridMap, setGridMap] = useState([
        { id: Date.now(), value: 4 },
        { id: Date.now(), value: 5 },
        { id: Date.now(), value: 6 },
        { id: Date.now(), value: 7 },
        { id: Date.now(), value: 8 },
        { id: Date.now(), value: 9 }
    ]);



    return (
        <div className="text-[#FDD8A8] w-[80%] h-[80%] absolute top-[50%] left-[50%] translate-[-50%] bg-[#641F16] flex flex-col items-center justify-center gap-y-[45px] rounded-[37px]">
            <h2 className="text-[100px] text-center select-none">Answers hidden behind this layer</h2>
            <div className="text-[50px] flex flex-col items-center gap-y-[20px]">
                <h3 className="select-none">Choose the complexity:</h3>
                <ul className="flex items-center justify-center flex-wrap gap-x-[30px]">
                    {gridMap.map((element, index) => (
                        index === 0 
                        ? 
                        (<ComplexityButton ref={ref} isActive={true} key={element.id + index} grid={element.value} onClickComplexityButton={onClickForComplexityButton} />)
                        :
                        <ComplexityButton ref={ref} isActive={false} key={element.id + index} grid={element.value} onClickComplexityButton={onClickForComplexityButton} />
                    ))}
                </ul>
                <button className="mt-[20px]">Play</button>
            </div>
        </div>
    )
});

export default Layer;