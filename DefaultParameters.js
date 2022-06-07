/* Video 128 Title "Default Parameters" */

'use strict';

const booking = [];

const createBooking = function (
    flightNume,
    numpassengers = 1,
    price = 199 * numPassengers
    ) {
    // ESS
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    booking.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);