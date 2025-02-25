

// definizione variabili
let n;
let fizz = "Fizz";
let buzz = "Buzz";
let fizzBuzz = "FizzBuzz"

// creazione ciclo for da 1 a 100

for (n = 1; n <= 100; n++) {

    // caso divisibili per 3 e per 5  va messo per primo altrimenti i multipli verrebbero scritti in primis come multipli di 3

    if (n % 3 === 0 && n % 5 === 0) {
        console.log(fizzBuzz);
    }


    // caso divisibili per 3

    else if (n % 3 === 0) {
        console.log(fizz);
    } 
    
    // caso divisibili per 5 

    else if (n % 5 === 0) {
        console.log(buzz);

    }  
    
    // altri numeri 

    else {
        console.log(n);
    }

}