import map from "./5-write-map-doubleIt";

test("map creates a new array that doubles the numbers", () => {
    expect(map([20, 40, 50, 100])).toEqual([40, 80, 100, 200])
})

test("map creates a new array that doubles the numbers", () => {
    expect(map([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10])
})

test("map creates a new array that doubles the numbers", () => {
    expect(map([5, 10, 20, 25, 30])).toEqual([10, 20, 40, 50, 60])
})

test("map creates a new array that doubles the numbers", () => {
    expect(map([50, 100, 200, 300, 500])).toEqual([100, 200, 400, 600, 1000])
})