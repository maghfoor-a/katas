import sumNestedArrays from "./12-sum-nested-arrays";

test("takes a nested array and returns a sum of all the numbers in nested array", () => {
    expect(sumNestedArrays([10, [2, 3, 6], [1, [100, [3, 4], 5]]])).toEqual(134)
});
test("takes a nested array and returns a sum of all the numbers in nested array", () => {
    expect(sumNestedArrays([[3, [10, [20]]]])).toEqual(33)
});