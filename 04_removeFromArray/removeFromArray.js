const removeFromArray = function(array, ...toRemove) {
    let filteredArray = [];
    outer:
    for(const item of array) {
        for(const target of toRemove) {
            if(item === target) {
                continue outer;
            }
        }
        filteredArray.push(item);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
