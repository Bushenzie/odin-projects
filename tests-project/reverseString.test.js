
const reverseString = require("./reverseString");

test("Capitalization test 1 (Classic)",()=> {
    expect(reverseString("test")).toEqual("tset");
})
test("Capitalization test 2 (With Numbers)",()=> {
    expect(reverseString("tEsTing123")).toEqual("321gniTsEt");
})
test("Capitalization test 3 (Not Characters)",()=> {
    expect(reverseString("____")).toEqual("____");
})