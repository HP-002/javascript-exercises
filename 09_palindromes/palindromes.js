const palindromes = function (str) {
    let digits = '0123456789';
    let alphabets = 'abcdefghijklmonpqrstuvwxyz';
    let start = 0, end = str.length-1;
    let charStart, charEnd;
    str = str.toLowerCase();
    while(start != end) {
        charStart = str.charAt(start);
        if(!digits.includes(charStart) && !alphabets.includes(charStart)) {
            start++;
            continue;
        }

        charEnd = str.charAt(end);
        if(!digits.includes(charEnd) && !alphabets.includes(charEnd)) {
            end--;
            continue;
        }

        if(charStart !== charEnd) {
            return false;
        }
        start++; end--;
    }

    return true;
};

palindromes('r3ace3car')

// Do not edit below this line
module.exports = palindromes;
