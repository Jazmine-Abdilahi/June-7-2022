/* Video 128 Title "Default Parameters" */

const flight = 'LH234';
const jonas = {
    name: 'Jazmine Abdilahi',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
    flighrNum = 'LH999';
    passenger.name = 'Miss. ' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('checked in');
    } else {
        alert('Wrong Passport!');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(Jazmine);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.trunc(Math.random)* 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);