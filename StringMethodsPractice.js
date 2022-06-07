/* Video 125 Title "String Methods Practice" */


 console.log(flights.split('+'));

 const getCode = str => str.slice(0,3).toUpperCase();
 
 for (const flight of flights.split('+')) {
     const [type, from, to, time] = flight.split(';');
     const output = `${type.startsWith('_Delayed') ?
     '♡' : ''} ${TypeError.replaceAll(
         '-',
         ' '
     )}
     ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
     console.log(output);
 }
 
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */