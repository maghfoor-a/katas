/*
Write a function  called `map` which takes two arguments:

- `inputArray` : an array (of anything)
- `callbackFn`: a function

It should return a new array with the collected results of calling `callbackFn` on every element of `inputArray`.
map([10, 30, 20],  v => v * 2);
=======================
*/

function map(inputArr: number[]): number[] {
    const resultArr: number[] = []
    
    for (const num of inputArr) {
        const newNum = doubleIt(num);
        resultArr.push(newNum);
    }

    return resultArr;
}

function doubleIt(num: number): number {
    const result = num * 2;
    return result;
}

export default map;

