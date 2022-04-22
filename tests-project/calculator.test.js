const calculator = require("./calculator");

test("Adding",()=> {
    expect(calculator.Add(1,2)).toBe(3);
})
test("Subtracting",()=> {
    expect(calculator.Subtr(2,1)).toBe(1);
})
test("Dividing 1",()=> {
    expect(calculator.Divide(2,2)).toBe(1);
})
test("Dividing By Zero",()=> {
    expect(calculator.Divide(2,0)).toBe(null);
})
test("Multiplying",()=> {
    expect(calculator.Multiply(3,2)).toBe(6);
})