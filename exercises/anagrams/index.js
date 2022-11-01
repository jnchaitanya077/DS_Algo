// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

function buildCharMap(str) {
    let map = {}
    for (const char of str) {
        map[char] = map[char] + 1 || 1;
    };
    return map;
}
// Solution 1
function anagrams(stringA, stringB) {

    stringA = cleanString(stringA);
    stringB = cleanString(stringB);

    if (stringA.length !== stringB.length) return false;

    let stringMapA = buildCharMap(stringA);

    for (const stringCharB of stringB) {
        if (!stringMapA[stringCharB]) return false;
        else {
            stringMapA[stringCharB] = stringMapA[stringCharB] - 1
        };
        if (stringMapA[stringCharB] === 0) delete stringMapA[stringCharB];
    }

    return Object.keys(stringMapA).length === 0;
}

// Solution 2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;