/*
Write a function, printAllValues(obj) which takes an object with unknown content and prints to console, one per line, each value in the object, ideally, sorted alphabetically.
===================================
function: printAllValues(obj)
Parameters: object of strings
Output: void

PROGRAMME printAllValues(obj)
    FOR each key in object
        print KEY and VALUE
    ENDFOR
RETURN void;
*/
function printAllValues(obj: {[key: string]: any}): void {
    const inOrder: string[] = [];
    for (const key in obj) {
        inOrder.push(obj[key])
    }
    inOrder.sort();
    for (const city in inOrder) {
        console.log(inOrder[city]);
    }
}
const obj = {
    Afghanistan: "Kabul",
    Angola: "Luanda",
    Brazil: "Brasília",
    Canada: "Ottawa",
    China: "Beijing",
    Cuba: "Havana",
    Denmark: "Copenhagen",
    Iceland: "Reykjavík",
    Japan: "Tokyo",
    Kazakhstan: "Astana",
    Mexico: "Mexico City",
    Nigeria: "Abuja",
    Philippines: "Manila",
    Ukraine: "Kiev",
  }

printAllValues(obj);