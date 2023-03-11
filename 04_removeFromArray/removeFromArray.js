const removeFromArray = function(array, ...itemsToRmv) {
    
    for (const item of itemsToRmv) {
        if (array.includes(item)) {
            const index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    return array;
};

// removeFromArray([3, 5, 4, 6], 3)


// Do not edit below this line
module.exports = removeFromArray;
