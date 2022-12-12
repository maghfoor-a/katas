/*
Write a function `sumNested` which takes a (possibly infinitely deeply) nested array of numbers and returns the sum of all numbers in the structure.
example input:
`[10, [2, 3, 6], [1, [100, [3, 4], 5]]]`

Expected output: `134` (because 10 + 2 + 3 + 6 + 1 + 100 + 3 + 4 + 5 is 134)

function: sumNestedArrays()
parameters: nested arrays of number type
output: number

Step 1: create a type for the input that will fit all possible nested arrays.

Step 2: Create a method to generate an array thats only an array of numbers.
Declare finalArray to be empty
For each element of input array, push the element to finalArray

Psuedo-code:
DECLARE a variable INPUT_ARRAY
FOR each element in INPUT_ARRAY 
    if Element is an array 
        remove the element from INPUT_ARRAY
        use the spread operator to put it back into INPUT_ARRAY



*/
type NumorNested = number | NumorNested[]

function sumNestedArrays(arrExample: NumorNested[]): number {
    const finalArray: NumorNested[] = []
    finalArray.push(arrExample);
    let count = 0;
    while (finalArray.length > 0) {
        const element = finalArray.pop()!;
        if (typeof element === "number") {
            count += element;
        } else {
            finalArray.push(...element)
        }
    }
    return count;
}

export default sumNestedArrays;