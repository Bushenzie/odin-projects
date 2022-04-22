
const analyzeArray = function(arr) {
    let average,min,max,length;

    const copy = arr.map(val => val);

    let sum = 0;
    length = 0;
    copy.forEach(el => {
        sum += el;
        length++;
    });

    min = Math.min(...arr);
    max = Math.max(...arr);
    average = sum / length;

    return {average,min,max,length};

}

module.exports = analyzeArray;