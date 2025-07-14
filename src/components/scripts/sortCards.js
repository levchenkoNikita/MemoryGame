const array = [
    { id: 1, value: 1, image: 'bg-[url("../assets/icons/sandwich.svg")]' },
    { id: 2, value: 1, image: 'bg-[url("../assets/icons/sandwich.svg")]' },
    { id: 3, value: 2, image: 'bg-[url("../assets/icons/cherry.svg")]' },
    { id: 4, value: 2, image: 'bg-[url("../assets/icons/cherry.svg")]' },

    { id: 5, value: 3, image: 'bg-[url("../assets/icons/dog.svg")]' },
    { id: 6, value: 3, image: 'bg-[url("../assets/icons/dog.svg")]' },
    { id: 7, value: 4, image: 'bg-[url("../assets/icons/theater.svg")]' },
    { id: 8, value: 4, image: 'bg-[url("../assets/icons/theater.svg")]' },

    { id: 9, value: 5, image: 'bg-[url("../assets/icons/dolphin.svg")]' },
    { id: 10, value: 5, image: 'bg-[url("../assets/icons/dolphin.svg")]' },
    { id: 11, value: 6, image: 'bg-[url("../assets/icons/earth.svg")]' },
    { id: 12, value: 6, image: 'bg-[url("../assets/icons/earth.svg")]' },

    { id: 13, value: 7, image: 'bg-[url("../assets/icons/fire.svg")]' }, 
    { id: 14, value: 7, image: 'bg-[url("../assets/icons/fire.svg")]' },
    { id: 15, value: 8, image: 'bg-[url("../assets/icons/flower.svg")]' },
    { id: 16, value: 8, image: 'bg-[url("../assets/icons/flower.svg")]' },

    { id: 17, value: 9, image: 'bg-[url("../assets/icons/lion.svg")]' },
    { id: 18, value: 9, image: 'bg-[url("../assets/icons/lion.svg")]' },
    { id: 19, value: 10, image: 'bg-[url("../assets/icons/lock.svg")]' },
    { id: 20, value: 10, image: 'bg-[url("../assets/icons/lock.svg")]' },

    { id: 21, value: 11, image: 'bg-[url("../assets/icons/piano.svg")]' },
    { id: 22, value: 11, image: 'bg-[url("../assets/icons/piano.svg")]' },
    { id: 23, value: 12, image: 'bg-[url("../assets/icons/pizza.svg")]' },
    { id: 24, value: 12, image: 'bg-[url("../assets/icons/pizza.svg")]' },

    { id: 25, value: 13, image: 'bg-[url("../assets/icons/hat.svg")]' },
    { id: 26, value: 13, image: 'bg-[url("../assets/icons/hat.svg")]' },
    { id: 27, value: 14, image: 'bg-[url("../assets/icons/smile.svg")]' },
    { id: 28, value: 14, image: 'bg-[url("../assets/icons/smile.svg")]' },

    { id: 29, value: 15, image: 'bg-[url("../assets/icons/target.svg")]' },
    { id: 30, value: 15, image: 'bg-[url("../assets/icons/target.svg")]' },
    { id: 31, value: 16, image: 'bg-[url("../assets/icons/umbrella.svg")]' },
    { id: 32, value: 16, image: 'bg-[url("../assets/icons/umbrella.svg")]' },

    { id: 33, value: 17, image: 'bg-[url("../assets/icons/origami.svg")]' },
    { id: 34, value: 17, image: 'bg-[url("../assets/icons/origami.svg")]' },
    { id: 35, value: 18, image: 'bg-[url("../assets/icons/cat.svg")]' },
    { id: 36, value: 18, image: 'bg-[url("../assets/icons/cat.svg")]' }
]

export function getShuffledPairs(gridSize) {
    const totalCards = gridSize * gridSize; // 4, 16 или 36
    const totalPairs = totalCards / 2; // 2, 8 или 18 пар

    // 1. Создаем массив всех возможных пар из исходного массива
    const allPossiblePairs = [];
    const usedIds = new Set(); // Чтобы избежать дублирования

    for (const card of array) {
        if (usedIds.has(card.id)) continue;

        // Ищем парную карточку
        const pair = array.find(
            (c) => c.value === card.value && c.id !== card.id && !usedIds.has(c.id)
        );

        if (pair) {
            allPossiblePairs.push([card, pair]);
            usedIds.add(card.id).add(pair.id);
        }
    }

    // 2. Проверяем, хватает ли пар для выбранной сетки
    if (allPossiblePairs.length < totalPairs) {
        throw new Error(`Недостаточно пар в исходном массиве! Нужно ${totalPairs}, есть ${allPossiblePairs.length}`);
    }

    // 3. Выбираем случайные `totalPairs` пар
    const shuffledPairs = shuffleArray(allPossiblePairs).slice(0, totalPairs);

    // 4. "Разворачиваем" пары в плоский массив и перемешиваем
    const flatPairs = shuffledPairs.flat();
    return shuffleArray(flatPairs);
}

// Функция перемешивания (Fisher-Yates)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
