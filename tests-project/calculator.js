

class Calculator {
    constructor(){}
    Add(x,y) { return x+y };
    Subtr(x,y) { return x-y };
    Multiply(x,y) { return x*y };
    Divide(x,y) { 
        return y !== 0 ? x/y : null; 
    };
}

const calculator = new Calculator();

module.exports = calculator;