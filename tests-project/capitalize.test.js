
const capitalize = require("./capitalize");

test("all lower cased",()=> {
    expect(capitalize("test")).toEqual("Test");
})

test("all upper cased",()=> {
    expect(capitalize("TEST")).toEqual("Test");
})

test("mixed cased",()=> {
    expect(capitalize("tEsT")).toEqual("Test");
})

test("mixed cased (With special characters)",()=> {
    expect(capitalize("tE@123sT")).toEqual("Te@123st");
})