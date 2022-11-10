import gooseFilter from "./7-filter-geese";

test("takes in an arrays or birds and removes all the geese types", () => {
    expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"])
})

test("takes in an arrays or birds and removes all the geese types", () => {
    expect(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])).toEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
})

test("takes in an arrays or birds and removes all the geese types", () => {
    expect(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])).toEqual([])
})