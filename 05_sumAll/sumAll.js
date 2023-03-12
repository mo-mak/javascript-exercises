const sumAll = function(startNum, endNum) {
    let sum = 0;
    
    if (startNum > endNum) {
        const temp = startNum;
        startNum = endNum;
        endNum = temp;
    }
    
    if (startNum < 0 || endNum < 0) {
        return 'ERROR';
    }

    if (typeof startNum != 'number' || typeof endNum != 'number') {
        return 'ERROR'
    }

    for (let i = endNum; i >= startNum; i--) {
        sum += i;
    }
    return sum;
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
