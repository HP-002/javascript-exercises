const reverseString = function(str) {
    let reverseStr = ''
    while(str != '') {
        reverseStr = str.charAt(0) + reverseStr;
        str = str.slice(1);
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
