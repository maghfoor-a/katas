/*
Write a function  called `map` which takes two arguments:

- `inputObject` : an array (of anything)
- `callbackFn`: a function

It should return a new array with the collected results of calling `callbackFn` on every element of `inputArray`.
const spells = [
    {
      "incantation": "Accio",
      "effect": "Summons an object",
      "type": "Charm"
    },
    {
      "incantation": "Aguamenti",
      "effect": "Shoots water from wand",
      "type": "Charm"
    },
    {
      "incantation": "Alohomora",
      "effect": "Opens locked objects",
      "type": "Charm"
    }
];

function myFunction(spell){ return spell.incantation }
function myFunction2(spell){ return spell.type }
=======================
*/

const spells = [
    {
      "incantation": "Accio",
      "effect": "Summons an object",
      "type": "Charm"
    },
    {
      "incantation": "Aguamenti",
      "effect": "Shoots water from wand",
      "type": "Charm"
    },
    {
      "incantation": "Alohomora",
      "effect": "Opens locked objects",
      "type": "Charm"
    }
]
interface spell {
    incantation: string,
    effect: string, 
    type: string
}

function map(spells: spell[]): string[] {
    const resultArr: string[] = []
    
    for (const spell of spells) {
        const incantation = spell.incantation;
        resultArr.push(incantation);
    }

    return resultArr;
}

