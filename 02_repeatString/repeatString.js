const repeatString = function(string, repeatNum) {
    
    let newString = '';
    
    if (repeatNum < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < repeatNum; i++) {
            newString += string;   
        }
    }
    
    return newString;
};

// console.log(repeatString('Hello', 5));

// Do not edit below this line
module.exports = repeatString;
