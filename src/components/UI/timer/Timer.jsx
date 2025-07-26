import { useEffect, useContext, useState } from "react";
import { countRoundContext } from "../../Table";
import InputRadioChoose from "../inputs/InputRadioChoose";
import InputRadioProgress from "../inputs/InputRadioProgress";
import InputTimerCount from "../inputs/InputTimerCount";
import Roller from "../roller/Roller";

function Timer() {
    const [countProgress, setCountProgress] = useState(0);
    const { isStartPlay, countRound, setCountRound, setCopyCountRound } = useContext(countRoundContext);
    const [progressList, setProgressList] = useState([
        { id: 50, value: 1, isActive: true },
        { id: 51, value: 2, isActive: false },
        { id: 52, value: 3, isActive: false },
        { id: 53, value: 4, isActive: false },
        { id: 54, value: 5, isActive: false },
        { id: 55, value: 6, isActive: false },
        { id: 56, value: 7, isActive: false },
        { id: 57, value: 8, isActive: false },
        { id: 58, value: 9, isActive: false },
        { id: 59, value: 10, isActive: false }
    ]);
    const [chooseList, setChooseList] = useState(progressList.map((el) => ({ id: el.id + 10, ...el })));
    const [countList, setCountList] = useState(progressList.map((el) => (el.value)));

    function handleChooseComplexity(value) {
        if (isStartPlay) {

        }
        else {
            const newArray = chooseList;
            for (let i = 0; i < chooseList.length; i++) {
                if (newArray[i].value !== value) {
                    newArray[i].isActive = false;
                }
                else {
                    newArray[i].isActive = true;
                }
            }
            setChooseList([...newArray]);
        }
    }

    useEffect(() => {
        if (isStartPlay) {
            let value = 0;
            for(let i = 0; i < chooseList.length; i++) {
                if(chooseList[i].isActive === true) {
                    value = chooseList[i].value;
                    break;
                }
            }
            setCountRound(value);
            setCopyCountRound(value);
        }
        else {
            setCountProgress(0);
        }
    }, [isStartPlay])

    useEffect(() => {
        if(isStartPlay) {
            const newArray = [];
            let obj = {};
            for(let i = 0; i < progressList.length; i++) {
                if(i === countProgress) {
                    obj = {...progressList[i], isActive: true};
                } else {
                    obj = {...progressList[i], isActive: false};
                }
                newArray.push(obj);
                obj = {};
            }
            setProgressList([...newArray]);
            setCountProgress(prev => prev + 1);
        }
    }, [countRound])

    return (
        <div className="w-[70%] h-[70%] flex flex-col-reverse">
            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {chooseList.map((el) => {
                    return <InputRadioChoose key={el.value} id={el.id} value={el.value} checked={el.isActive} />
                })}
                <Roller />
            </div>

            <div className="w-full h-[50%] bg-timer flex items-center justify-between">
                {countList.map((el) => {
                    if (el == 10) {
                        return <InputTimerCount key={el} value={el} isLast={true} onClick={(value) => handleChooseComplexity(value)} />
                    }
                    return <InputTimerCount key={el} value={el} isLast={false} onClick={(value) => handleChooseComplexity(value)} />
                })}
            </div>

            <div className={`h-[25%] w-full flex items-center justify-between relative`}>
                {progressList.map((el) => {
                    return <InputRadioProgress key={el.value} id={el.id} value={el.value} checked={el.isActive} />
                })}
                <Roller />
            </div>
        </div>
    )
}

export default Timer;