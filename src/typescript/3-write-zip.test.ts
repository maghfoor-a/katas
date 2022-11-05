import {writeZip, shortest} from "./3-write-zip";

test("returns shortest array length", () => {
  expect(shortest([1, 2, 3, 6, 4, 6], ["hello", "boom", "fire", "string"])).toBe(4);
});
test("returns array of tuples", () => {
  expect(writeZip([1, 2, 3, 6, 4, 6], ["hello", "boom", "fire", "string"])).toEqual([[1, "hello"], [2, "boom"], [3, "fire"], [6, "string"]]);
});

