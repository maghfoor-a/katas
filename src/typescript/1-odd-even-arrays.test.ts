import partitionOddEven from "./1-odd-even-arrays"

test("partitionOddEven splits array into two arrays", () => {
    expect(partitionOddEven([20, 3, 4, 5, 1, 7, 6])).toEqual({ odd: [3, 5, 1, 7], even: [20, 4, 6] });
});
test("partitionOddEven splits array into two arrays", () => {
    expect(partitionOddEven([20, 40, 45, 5, 1, 7, 6])).toEqual({ odd: [45, 5, 1, 7], even: [20, 40, 6] });
})