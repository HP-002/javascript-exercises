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


 
const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]
findTheOldest(people)


// Do not edit below this line
module.exports = findTheOldest;
