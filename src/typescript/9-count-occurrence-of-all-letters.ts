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

    return resultArr
}


function countLetterOccurence(inputString: string): string[] {
    const stringArr = inputString.split("");
    const returnArray: string[] = []

    for (const letter of stringArr) {
        if (!returnArray.includes(letter)) {
            returnArray.push(letter);
        }
    }
    return returnArray
}

console.log(countLetters("Bellllll", 2));