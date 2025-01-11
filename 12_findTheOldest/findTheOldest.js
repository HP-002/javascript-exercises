const findTheOldest = function(people) {
    let currYear = new Date().getFullYear();

    let oldest;
    let oldestAge = 0;
    let currAge;

    for(const person of people) {
        if(person["yearOfDeath"] == undefined) {
            currAge = currYear - person["yearOfBirth"];
        } else {
            currAge = person["yearOfDeath"] - person["yearOfBirth"];
        }

        if(currAge > oldestAge) {
            oldestAge = currAge;
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
