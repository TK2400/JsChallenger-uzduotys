console.log(myFunction(2000))
console.log(myFunction(197))
console.log(myFunction(17))
console.log(myFunction(23))
console.log(myFunction(9))


// console.log(isPrime(14))

function myFunction(a) {
    function isPrime(num) {
        if (num < 2) {
            return false
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }

        return true
    }
    let numberIsPrime = isPrime(a)
    if (numberIsPrime) {
        return a
    }
    while (!isPrime(a)) {
        a++
    }

    return a

}

/*function myFunction(a) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n
}*/