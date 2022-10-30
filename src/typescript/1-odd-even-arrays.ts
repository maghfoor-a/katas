/*
Partition a given list of numbers into two arrays: one of its odd elements, one of its even elements.
partitionOddEven([20, 3, 4, 5, 1, 7, 6])
//expect { odd: [3, 5, 1, 7], even: [20, 4, 6] }
*/
function findOdd(inputArray: number[]): number[] {
    let oddArr = [];
    for (const num of inputArray) {
      if (num % 2 !== 0) {
         oddArr.push(num);
      }
    }
    return oddArr;
}
function findEven(inputArray: number[]): number[] {
    let EvenArr = [];
    for (const num of inputArray) {
      if (num % 2 === 0) {
         EvenArr.push(num);
      }
    }
return EvenArr;
}
function partitionOddEven(inputArray: number[]): {odd: number[], even: number[]} {
return {odd: findOdd(inputArray), even: findEven(inputArray)}
}

export default partitionOddEven;

