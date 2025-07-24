import { useEffect, useMemo, useState } from "react";
import InputRadioChoose from "../inputs/InputRadioChoose";
import InputRadioProgress from "../inputs/InputRadioProgress";
import InputTimerCount from "../inputs/InputTimerCount";
import Roller from "../roller/Roller";

function Timer() {
    const [progressList, setProgressList] = useState([
        { value: 1, isActive: true },
        { value: 2, isActive: false },
        { value: 3, isActive: false },
        { value: 4, isActive: false },
        { value: 5, isActive: false },
        { value: 6, isActive: false },
        { value: 7, isActive: false },
        { value: 8, isActive: false },
        { value: 9, isActive: false },
        { value: 10, isActive: false }
    ]);
    const [chooseList, setChooseList] = useState(progressList.map((el) => ({...el})));
    const [countList, setCountList] = useState(progressList.map((el) => (el.value)));

    function handleChooseComplexity(value) {
        const newArray = chooseList;
        for(let i = 0; i < chooseList.length; i++) {
            if(newArray[i].value !== value) {
                newArray[i].isActive = false;
            } 
            else {
                newArray[i].isActive = true;
            }
        }
        setChooseList([...newArray]);
    }

    return (
        <div className="w-[70%] h-[70%] flex flex-col-reverse">
            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {chooseList.map((el) => {
                    return <InputRadioChoose key={el.value} value={el.value} checked={el.isActive} />
                })}
                <Roller />
            </div>

            <div className="w-full h-[50%] bg-timer flex items-center justify-between">
                {countList.map((el) => {
                    if(el == 10) {
                        return <InputTimerCount key={el} value={el} isLast={true} onClick={(value) => handleChooseComplexity(value)} />
                    }
                    return <InputTimerCount key={el} value={el} isLast={false} onClick={(value) => handleChooseComplexity(value)} />
                })}
            </div>

            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {progressList.map((el) => {
                    return <InputRadioProgress key={el.value} value={el.value} checked={el.isActive} />
                })}
                <Roller />
            </div>
        </div>
    )
}

export default Timer;