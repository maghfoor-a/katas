import pascalToCamel from "./11-convert-pascalcase-to-snakecase";

test("takes a string and converts it from camelCase to snake_case", () => {
    expect(pascalToCamel("HelloHowAreYou")).toEqual("hello_how_are_you")
    expect(pascalToCamel("ThisIsAnApple")).toEqual("this_is_an_apple")
    expect(pascalToCamel("2")).toEqual("2")
})
test("takes a string and converts it from camelCase to snake_case 2", () => {
    expect(pascalToCamel("2")).toEqual("2")
})
test("takes a string and converts it from camelCase to snake_case 3", () => {
    expect(pascalToCamel("ThisIsAnApple")).toEqual("this_is_an_apple")
    expect(pascalToCamel("2")).toEqual("2")
})