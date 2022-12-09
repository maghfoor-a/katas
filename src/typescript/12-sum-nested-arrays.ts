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



*/
type NestedArray = number | NestedArray[]

const a: NestedArray = 10
const b: NestedArray = [10]

const c: NestedArray = [10, 20]
const d: NestedArray = [10, 20, [2, 5, 6]]
const e: NestedArray = [10, 20, [[[]]]]
//const f: NestedArray = [10, 20, [null]]
//nested array is either a number or an array of elements, each of which MUST match nestedArray type.


const arrExample: NestedArray = [10, [2, 3, 6], [1, [100, [3, 4], 5]]]

function sumNestedArrays(arrExample: NestedArray): number[] {

    return [2]
}