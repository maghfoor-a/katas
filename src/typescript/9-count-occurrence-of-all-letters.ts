/*
function: countLetters(inputText, number)
parameters: string, number
output: [string, number][]. Array of sets
=======================================

DECLARE resultArr to be empty array
DECLARE uniqueLetters to be = function createUniqueLettersArr(inputString)
FOR each letter in uniqueLetters
    letterCount = function countLetteroccurence(inputString)
    DECLARE letterSet to be equal to array of letter and letterCount values
    push letterSet to resultArr
END FOR
sort resultArr with respect to letterCount values

RETURN resultArr

*/
function countLetters(inputText: string, inputNumber: number): (string|number)[][] {
    const inputTextArr = inputText.split("");
    const resultArr = []
    const uniqueLetters = countLetterOccurence(inputText);

    for(const letter of uniqueLetters) {
        let count = 0
        for(const testingLetter of inputTextArr) {
            if (letter === testingLetter){
                count++
            }
        }
        resultArr.push([letter, count])
    }


    resultArr.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
        };
    })(1));

    return resultArr.slice(0, inputNumber)
}


function countLetterOccurence(inputString: string): string[] {
    const stringArr = inputString.split("");
    const returnArray: string[] = []

    for (const letter of stringArr) {
        if (!returnArray.includes(letter)) {
            returnArray.push(letter);
        }
    }
    return returnArray.slice()
}

console.log(countLetters("hello", 2));

// function sortresultArray(resultArr: (number|string)[][]): (number|string)[][] {
//     for (let i = 0; i < resultArr.length; i++) {
//         if (resultArr[i][1] < resultArr[i+1][1]) {
//             const element = 
//             resultArr.splice(i, i+1, resultArr[i+1]);
//         }
//     }
//     return resultArr
// }