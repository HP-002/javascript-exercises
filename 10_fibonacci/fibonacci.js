const fibonacci = function(pos) {
    // 0 1 1 2 3
    pos = Number.parseInt(pos);
    if(pos < 0) {
        return "OOPS"
    }

    if(pos == 0) {
        return 0;
    }
    if(pos == 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let c;
    while(pos != 1) {
        c = a + b;
        a = b;
        b = c;
        pos--;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
