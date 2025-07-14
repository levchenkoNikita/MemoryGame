import React, { useContext, useEffect, useMemo, useState } from "react";
import CardItem from "./UI/card/CardItem";
import { winContext } from "./DownSurface";

const CardList = function ({ grid }) {
    const [cardsGrid, setCardsGrid] = useState([
        { id: 1, value: 1, image: 'bg-[url("../assets/icons/birthday.svg")]', isActive: false, isAside: false },
        { id: 2, value: 1, image: 'bg-[url("../assets/icons/birthday.svg")]', isActive: false, isAside: false },
        { id: 3, value: 2, image: 'bg-[url("../assets/icons/cherry.svg")]', isActive: false, isAside: false },
        { id: 4, value: 2, image: 'bg-[url("../assets/icons/cherry.svg")]', isActive: false, isAside: false },

        { id: 5, value: 3, image: 'bg-[url("../assets/icons/dog.svg")]', isActive: false, isAside: false },
        { id: 6, value: 3, image: 'bg-[url("../assets/icons/dog.svg")]', isActive: false, isAside: false },
        { id: 7, value: 4, image: 'bg-[url("../assets/icons/hat.svg")]', isActive: false, isAside: false },
        { id: 8, value: 4, image: 'bg-[url("../assets/icons/hat.svg")]', isActive: false, isAside: false },

        { id: 9, value: 5, image: 'bg-[url("../assets/icons/dolphin.svg")]', isActive: false, isAside: false },
        { id: 10, value: 5, image: 'bg-[url("../assets/icons/dolphin.svg")]', isActive: false, isAside: false },
        { id: 11, value: 6, image: 'bg-[url("../assets/icons/earth.svg")]', isActive: false, isAside: false },
        { id: 12, value: 6, image: 'bg-[url("../assets/icons/earth.svg")]', isActive: false, isAside: false },

        { id: 13, value: 7, image: 'bg-[url("../assets/icons/fire.svg")]', isActive: false, isAside: false },
        { id: 14, value: 7, image: 'bg-[url("../assets/icons/fire.svg")]', isActive: false, isAside: false },
        { id: 15, value: 8, image: 'bg-[url("../assets/icons/flower.svg")]', isActive: false, isAside: false },
        { id: 16, value: 8, image: 'bg-[url("../assets/icons/flower.svg")]', isActive: false, isAside: false },

        { id: 17, value: 9, image: 'bg-[url("../assets/icons/lion.svg")]', isActive: false, isAside: false },
        { id: 18, value: 9, image: 'bg-[url("../assets/icons/lion.svg")]', isActive: false, isAside: false },
        { id: 19, value: 10, image: 'bg-[url("../assets/icons/lock.svg")]', isActive: false, isAside: false },
        { id: 20, value: 10, image: 'bg-[url("../assets/icons/lock.svg")]', isActive: false, isAside: false },

        { id: 21, value: 11, image: 'bg-[url("../assets/icons/piano.svg")]', isActive: false, isAside: false },
        { id: 22, value: 11, image: 'bg-[url("../assets/icons/piano.svg")]', isActive: false, isAside: false },
        { id: 23, value: 12, image: 'bg-[url("../assets/icons/pizza.svg")]', isActive: false, isAside: false },
        { id: 24, value: 12, image: 'bg-[url("../assets/icons/pizza.svg")]', isActive: false, isAside: false },

        { id: 25, value: 13, image: 'bg-[url("../assets/icons/present.svg")]', isActive: false, isAside: false },
        { id: 26, value: 13, image: 'bg-[url("../assets/icons/present.svg")]', isActive: false, isAside: false },
        { id: 27, value: 14, image: 'bg-[url("../assets/icons/smile.svg")]', isActive: false, isAside: false },
        { id: 28, value: 14, image: 'bg-[url("../assets/icons/smile.svg")]', isActive: false, isAside: false },

        { id: 29, value: 15, image: 'bg-[url("../assets/icons/target.svg")]', isActive: false, isAside: false },
        { id: 30, value: 15, image: 'bg-[url("../assets/icons/target.svg")]', isActive: false, isAside: false },
        { id: 31, value: 16, image: 'bg-[url("../assets/icons/umbrella.svg")]', isActive: false, isAside: false },
        { id: 32, value: 16, image: 'bg-[url("../assets/icons/umbrella.svg")]', isActive: false, isAside: false },

        { id: 33, value: 17, image: 'bg-[url("../assets/icons/cherry.svg")]', isActive: false, isAside: false },
        { id: 34, value: 17, image: 'bg-[url("../assets/icons/cherry.svg")]', isActive: false, isAside: false },
        { id: 35, value: 18, image: 'bg-[url("../assets/icons/birthday.svg")]', isActive: false, isAside: false },
        { id: 36, value: 18, image: 'bg-[url("../assets/icons/birthday.svg")]', isActive: false, isAside: false }
    ]);

    const imageBg = 'bg-[url("../assets/images/card-back.png")]';

    const gridClasses = {
        2: "grid-cols-2",
        4: "grid-cols-4",
        6: "grid-cols-6"
    };

    const gridCol = gridClasses[grid];

    const [isAside, setIsAside] = useState(false);
    const [activeCards, setActiveCards] = useState([
        { id: 0, value: 0 },
        { id: 0, value: 0 }
    ]);
    const { setIsWin, setIsActiveLE } = useContext(winContext);
    const [countActiveCards, setCountActiveCards] = useState(0);

    const realCardsGrid = useMemo(() => {
        if (isAside) {
            if (activeCards[0].id === 0) {
                return cardsGrid.map((el) => {
                    if (el.id === activeCards[0].id || el.id === activeCards[1].id) {
                        return { ...el, isAside: true };
                    }
                    return { ...el };
                })
            }
            else if (activeCards[1].id === 0) {
                return cardsGrid.map((el) => {
                    if (el.id === activeCards[0].id) {
                        return { ...el, isAside: true };
                    }
                    return { ...el };
                })
            }
            else {
                return cardsGrid.map((el) => {
                    if (el.id === activeCards[1].id) {
                        return { ...el, isAside: true };
                    }
                    else if (el.id === activeCards[0].id) {
                        return { ...el, isActive: true };
                    }
                    return { ...el };
                })
            }
        }
        if (activeCards[0].id === 0) {
            return cardsGrid.map((el) => {
                return { ...el }
            })
        }
        else if (activeCards[1].id === 0) {
            return cardsGrid.map((el) => {
                if (el.id === activeCards[0].id) {
                    return { ...el, isActive: true };
                }
                return { ...el };
            });
        }
        return cardsGrid.map((el) => {
            if (el.id === activeCards[0].id || el.id === activeCards[1].id) {
                return { ...el, isActive: true };
            } else {
                return { ...el };
            }
        });
    }, [cardsGrid, activeCards, isAside]);

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
                // setIsAside(true);
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
            }, 250);

            return () => clearTimeout(timer);
        }
    }, [isAside]);

    useEffect(() => {
        if( countActiveCards === Number(grid) ** 2) {
            setIsWin(true);
            setIsActiveLE(true);
        }
    }, [cardsGrid]);

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
                h-[80%] aspect-[1] grid ${gridCol} place-items-center gap-[24px]
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
                        value={el.value}
                        imageBg={imageBg}
                        imageFr={el.image}
                        isActive={el.isActive}
                        isAside={el.isAside}
                        onClickCard={() => handleClickCard(el.id, el.value)}
                    />;
                })
            }
        </div>
    );
}

export default CardList;