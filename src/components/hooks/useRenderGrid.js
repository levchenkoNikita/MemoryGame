export const useRenderGrid = (cardsGrid, activeCards) => {
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
}