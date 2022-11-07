import fizzBuzz from "./4-fizz-buzz";

test("given an array of numbers, numbers are replaces by Fizz, Buzz and FizzBuzz", () => {
    expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
});

test("given an array of numbers, numbers are replaces by Fizz, Buzz and FizzBuzz", () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test("given an array of numbers, numbers are replaces by Fizz, Buzz and FizzBuzz", () => {
    expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
});