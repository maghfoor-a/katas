/*
step 1: split string into an array seperating from capital letters.

for each element in array, turn to lower case and join them with _
*/

function pascalToCamel(inputString: string): string {
    let finalString = "";

    const inputToArray = inputString.split(/(?=[A-Z])/);

    const mappedArray = inputToArray.map(word => finalString += `${word.toLowerCase()}_`)
    //mappedArray[mappedArray.length-1].slice(-1)

    return finalString.slice(0, finalString.length -1)
}


export default pascalToCamel