// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// Solution 1
function reverse(str) {
  let rev = "";
  // Itetrate through string from last and concat to the new empty string.
  for (let character of str) {
    rev = character + rev;
  }
  return rev;
}

// Solution 2

function reverse(str) {
    return str.split("").reverse().join("");
  }

// Solution 3
function reverse(str) {
    return str.split('').reduce((prevConcatString, character)=>{
        return character + prevConcatString ;

    }, '');  
};

module.exports = reverse;
