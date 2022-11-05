/*

function shortest:

parameters: array of numbers or strings x2

return type: number

create variable; shortest = array1.length

if array2.length is shorter, reassign shortest to array 2

return shortest;


------------------------------------------------------------------------

function zip:

parameters array of numbers, array of numbers

return type: array of tuples

-----------------------------------------------------------------------------


arrayLength = shortest(Arr1,Arr2) // number

returnArr = [] //array of tuples


for i=0 to i=arrayLength 
    let tuple = [Arr1[i],Arr2[i]]
    push tuple to returnArr

*/

function shortest(array1: (number|string)[], array2: (number|string)[]): number {
    let shortest = array1.length;
    if (array2.length < shortest) {
        shortest = array2.length;
    }
    return shortest;
}

function writeZip(array1: (number|string)[], array2: (number|string)[]): (number|string)[][] {
    const arrayLength = shortest(array1, array2);
    let returnArray = [];
    for (let i = 0; i < arrayLength; i++) {
        let tuple = [array1[i], array2[i]];
        returnArray.push(tuple);
    }
    return returnArray;
}
export {writeZip, shortest};
