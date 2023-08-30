const returnFirstTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2, 4);
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

function createFareMultiplier(fareMultiplier) {
    return function(num) {
        return fareMultiplier * num;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
