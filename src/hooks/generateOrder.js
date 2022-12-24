const generateOrder = (names, firstPreviously) => {
    let shuffledNames = shuffleList(names);

    while (getFirst(shuffledNames) === firstPreviously) {
        shuffledNames = shuffleList(names);
    }

    return shuffledNames;
}

const getRandomIndex = (upperBound) => {
    return Math.floor(Math.random() * upperBound);
};

const shuffleList = (list) => {
    const shuffledList = [];
    const indexes = new Set();

    for (let i = 0; i < list.length; i++) {
        let randomIndex = getRandomIndex(list.length);

        while (indexes.has(randomIndex)) {
            randomIndex = getRandomIndex(list.length);
        }

        indexes.add(randomIndex);
        shuffledList.push(list[randomIndex]);
    }

    return shuffledList;
};

const getFirst = (list) => {
    return list[0];
};

export default generateOrder;
