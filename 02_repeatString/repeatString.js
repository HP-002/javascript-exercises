const repeatString = function(str, n) {
    if(n < 0) {
        return 'ERROR';
    }

    let repeatedString = "";
    while(n) {
        repeatedString += str;
        n--;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
