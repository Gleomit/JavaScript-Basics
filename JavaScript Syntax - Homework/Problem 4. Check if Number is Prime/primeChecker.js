function isPrime(number) {
    var result = true;
    for (var i = 0; i < number; i++) {
        if (i != 1 && i != number && number % i == 0) {
            result = false;
            break;
        }
    }
    console.log(result);
}

isPrime(7);
isPrime(254);
isPrime(587);
isPrime(4);