// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
function fib(n) {
    let numbers = [0,1];
    for (let index = 2; index <= n; index++) {
        numbers.push(numbers[index-1] + numbers[index-2]);        
    }
    return numbers[n];
}

// Solution 2
function fib(n) {

    if(n === 0) return 0;
    if(n === 1) return 1;


    let f0 = 0;
    let f1 = 1;
    let number = 0;

    for (let index = 2; index <= n; index++){
        number = f0 + f1;
        f0 = f1;
        f1 = number;
    }
    return number; 
}

// Solution 3
function slowFib(n) {

    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2); 
}


// solution 3 (Optimized)
function memoize(fn) {

    let cache = {};
    return function (...args) {

        if(cache[args]) {
            return cache[args];
        }
        let result = fn.apply(this,args);
        cache[args] = result;
        return result;

    }
    
}




let fib = memoize(slowFib);

module.exports = fib;
