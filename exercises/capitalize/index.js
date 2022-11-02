// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
function capitalize(str) {
    let charArray  = str.split(' ');

    for (let i = 0; i < charArray.length; i++) {
        let word = charArray[i];
        charArray[i] = word[0].toUpperCase() + word.slice(1);   
    }
    return charArray.join(' ');
}

// Solution 1(Optimized)

function capitalize(str) {
    let words = [];

    for (const word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

// Solution 2

function capitalize(str) {
    let txt = str[0].toUpperCase();

    for (let index = 1; index < str.length; index++) {
        let char = str[index];
        if(str[index-1] === ' ') {
            char = str[index].toUpperCase();
        }
        txt = txt + char;
    }
    return txt;
}

module.exports = capitalize;
