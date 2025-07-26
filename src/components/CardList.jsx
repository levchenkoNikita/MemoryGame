import { useEffect, useMemo, useState, useContext } from "react";
import CardItem from "./UI/card/CardItem";
import { getShuffledPairs } from "./scripts/sortCards";
import { useRenderGrid } from "./hooks/useRenderGrid";
import { countRoundContext } from "./Table";

const CardList = function ({ grid, setIsWin, setIsActiveLE }) {

    const [cardsGrid, setCardsGrid] = useState(getShuffledPairs(grid));
    const imageBg = 'bg-[url("/card-back.png")]';
    const gridClasses = {
        2: "grid-cols-2",
        4: "grid-cols-4",
        6: "grid-cols-6"
    };
    const gridCol = gridClasses[grid];
    const { countRound, setCountRound, setIsStartPlay } = useContext(countRoundContext);
    const [isAside, setIsAside] = useState(false);
    const [activeCards, setActiveCards] = useState([
        { id: 0, value: 0 },
        { id: 0, value: 0 }
    ]);
    const [countActiveCards, setCountActiveCards] = useState(0);
    const realCardsGrid = useMemo(() => { return useRenderGrid(cardsGrid, activeCards, isAside) }, [cardsGrid, activeCards, isAside]);

    useEffect(() => {
        if (activeCards[0].id !== 0 && activeCards[1].id !== 0 && isAside !== true) {
            const timer = setTimeout(() => {
                if (activeCards[0].value === activeCards[1].value) {
                    setCardsGrid(prevCards => prevCards.map((el) => {
                        if (activeCards[0].id === el.id || activeCards[1].id === el.id) {
                            return { ...el, isActive: true }
                        }
                        return { ...el }
                    }));
                    setCountActiveCards(prevCount => prevCount + 2);
                }
                else {
                    setCountRound(prev => prev - 1);
                }
                // setIsAside(true); -- доделать обратную анимацию
                setActiveCards([
                    { id: 0, value: 0 },
                    { id: 0, value: 0 }
                ]);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [activeCards, isAside]);

    useEffect(() => {
        if (isAside) {
            const timer = setTimeout(() => {
                setIsAside(false);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [isAside]);

    useEffect(() => {
        if( countActiveCards === Number(grid) ** 2) {
            setCountActiveCards(0);
            setIsWin(true);
            setIsActiveLE();
        }
    }, [cardsGrid]);

    useEffect( () => {
        if(countRound <= 0) {
            setCountActiveCards(0);
            setIsWin(false);
            setIsActiveLE();
        }
    }, [countRound]);

    useEffect(() => { setCardsGrid(getShuffledPairs(grid)) }, [grid]);

    const handleClickCard = (id, value) => {
        if (isAside) {
            // происходит анимация переворота карточки
        }
        else if (activeCards[0].id === 0) {
            setActiveCards([
                { id: id, value: value },
                { id: 0, value: 0 }
            ]);
            setIsAside(true);
        } else if (activeCards[1].id === 0) {
            setActiveCards([
                { id: activeCards[0].id, value: activeCards[0].value },
                { id: id, value: value }
            ]);
            setIsAside(true);
        } else {
            // обновление состояний и последующий "ререндинг" не происходят,
            // что позволяет избежать ситуации, когда пользователь кликает по карточке во время проверки 
            // совпадения двух активных карточек
        }
    }

    return (
        <div className={`
                h-[80%] aspect-[1] grid ${gridCol} place-items-center gap-[6px]
                p-[20px]
            `}>
            {
                realCardsGrid.map((el, index) => {
                    if (index >= (Number(grid) ** 2)) {
                        return null;
                    }
                    return <CardItem
                        key={el.id}
                        id={el.id}
                        grid={grid}
                        value={el.value}
                        imageBg={imageBg}
                        imageFr={el.image}
                        isActive={el.isActive ? true : false} // для избавления от избыточности повторных данных в cardsGrid
                        isAside={el.isAside ? true : false} // для избавления от избыточности повторных данных в cardsGrid
                        onClickCard={() => handleClickCard(el.id, el.value)}
                    />;
                })
            }
        </div>
    );
}

export default CardList;