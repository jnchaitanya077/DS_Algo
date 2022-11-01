// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
function reverseInt(n) {
    let sign = Math.sign(n);

    if (sign < 0) {
        n = -1 * n;
    }

    let rev = parseInt(n.toString().split('').reduce((p, c) => c + p, ''));
    return rev * sign;
}

// Solution 2
function reverseInt(n) {
    let rev = 0;
    let sign = Math.sign(n);

    if (sign < 0) {
        n = -1 * n;
    }

    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }
    return rev * sign;

}

module.exports = reverseInt;