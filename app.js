"use strict";
const multiplyArray = (array) => {
    const myArrayOfNumbers = array.map((i) => Number(i))
        .filter((i) => !Number.isNaN(i));
    const multiply = myArrayOfNumbers.reduce((a, b) => a * b);
    return console.log(multiply);
};
multiplyArray(["10", "15", "cat", 2]);
