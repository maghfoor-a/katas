import { format } from "path";

/*
Write a function, `generateFizzBuzz` which takes a number N and returns an array containing the numbers from 1 to N, with the following exceptions:
Certain values should be replaced, when any of the following conditions are met:

- If the value is a multiple of 3: use the value "Fizz" instead
- If the value is a multiple of 5: use the value "Buzz" instead
- If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

function: fizzBuzz()
parameters: NUM, number type
output: array of strings and numbers

=========================================
 Psuedocode:

 FUNCTION fizzBuzz(NUM)
    DECLARE FINALARRAY to be an empty array
    
    FOR (let i = 1; i < NUM; i++)
        add i to FINALARRAY
    ENDFOR

    FOR EACH ELEMENT in FINALARRAY
        IF ELEMENT if divisible by 3
            replace ELEMENT with "Fizz"
        ELSEIF ELEMENT is divisible by 5
            replace ELEMENT with "Buzz"
        ELSEIF ELEMENT is divisible by 3 && 5
            replace ELEMENT with "FizzBuzz"
    
    RETURN FINALARRAY

*/
function fizzBuzz(num: number): (number|string)[] {
    const finalArray: any[] = [];

    for (let i: number = 1; i <num+1; i++) {
        finalArray.push(i);
    }
    for (const element of finalArray) {
        if (element % 3 === 0) {
            const index:number = finalArray.indexOf(element);
            finalArray[index] = "Fizz";
        } else if (element % 5 === 0) {
            const index:number = finalArray.indexOf(element);
            finalArray[index] = "Buzz";
        } else if ((element % 3 === 0) && (element % 5 === 0)) {
            const index:number = finalArray.indexOf(element);
            finalArray[index] = "FizzBuzz";
        }

    }

    return finalArray;
}

console.log(fizzBuzz(15), "should be [1, 2, 'Fizz', 4, 'Buzz']")
