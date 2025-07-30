import { useEffect, useContext, useState } from "react";
import { countRoundContext } from "../../Table";
import InputRadioChoose from "../inputs/InputRadioChoose";
import InputRadioProgress from "../inputs/InputRadioProgress";
import useProgressList from "../../hooks/useProgressList";
import InputTimerCount from "../inputs/InputTimerCount";
import Roller from "../roller/Roller";

function Timer() {
    const [countProgress, setCountProgress] = useState(0);
    const { isStartPlay, countRound, setCountRound, setCopyCountRound } = useContext(countRoundContext);
    const [progressList, setProgressList] = useProgressList();
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
            setProgressList(prev => prev.map((el, index) => {
                if(index === 0) {
                    return {...el, isActive: true};
                }
                else {
                    return {...el, isActive: false};
                }
            }))
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
        <div className="w-clamp h-[70%] flex flex-col-reverse">
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