// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
    let reversedString = '';
    for (let character of str) {
        reversedString = character + reversedString;
    }
    return reversedString === str;
}

// Solution 2
function palindrome(str) {
    const reversedString = str.split('').reverse().join('');
    return reversedString === str;
}

// Solution 3
function palindrome(str) {
    const reversedString = str.split('').reduce((prev, char) => {
        return char + prev;
    }, '');
    return reversedString === str;
}

// Solution 4
function palindrome(str) {
    return str.split("").every((char, i)=> {
        return char === str[str.length - 1 - i]
    });
};

//Solution 5

function palindrome(str) {
    for (let index = 0; index < str.length/2; index++) {
        const first = str[index];
        const last = str[str.length-1-index]
        if(first !== last) return false;
    }
    return true;
}



module.exports = palindrome;