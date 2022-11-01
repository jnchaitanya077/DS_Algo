// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let map = {};
    let maxRepated = null;

    for (const char of str) {
        map[char] = map[char] + 1 || 1;
    }

    let keys = Object.keys(map);

    for (let index = 0; index < keys.length; index++) {
        
        if(index === 0){
            maxRepated = keys[index];
            continue;
        }
        if(map[keys[index]] > map[maxRepated]) {
            maxRepated = keys[index];
        }
        
    }

    return maxRepated;
}

module.exports = maxChar;
