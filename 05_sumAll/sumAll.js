const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    let lower = (start < end) ? start : end;
    let higher = (start > end) ? start : end;
    let sum = 0;

    while(lower <= higher) {
        sum += lower;
        lower++;    
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
