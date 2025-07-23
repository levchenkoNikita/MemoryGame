import { useState } from "react";
import InputRadioChoose from "../inputs/InputRadioChoose";
import InputRadioProgress from "../inputs/InputRadioProgress";
import InputTimerCount from "../inputs/InputTimerCount";
import Roller from "../roller/Roller";

function Timer() {
    const [progressList, setProgressList] = useState([
        { id: 0, value: 1 },
        { id: 1, value: 2 },
        { id: 2, value: 3 },
        { id: 3, value: 4 },
        { id: 4, value: 5 },
        { id: 5, value: 6 },
        { id: 6, value: 7 },
        { id: 7, value: 8 },
        { id: 8, value: 9 },
        { id: 9, value: 10 }
    ]);
    const [chooseList, setChooseList] = useState([...progressList]);
    const [countList, setCountList] = useState([...progressList]);

    return (
        <div className="w-[70%] h-[70%] flex flex-col-reverse">
            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {chooseList.map((el) => {
                    return <InputRadioChoose key={el.id} id={el.id} value={el.value} checked={true} />
                })}
                <Roller />
            </div>

            <div className="w-full h-[50%] bg-timer flex items-center justify-between">
                {countList.map((el) => {
                    if(el.id == 9) {
                        return <InputTimerCount key={el.id} id={el.id} value={el.value} isLast={true} />
                    }
                    return <InputTimerCount key={el.id} id={el.id} value={el.value} isLast={false} />
                })}
            </div>

            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {progressList.map((el) => {
                    return <InputRadioProgress key={el.id} id={el.id} value={el.value} />
                })}
                <Roller />
            </div>
        </div>
    )
}

export default Timer;