// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {

    let count = 0;
    let mainArray = [];
    let subArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        subArray.push(element);
        count++;

        if (count === size || index === array.length - 1) {
            mainArray.push(subArray);
            subArray = [];
            count = 0;
        }
    }
    return mainArray;
}

// Solution 2
function chunk(array, size) {

    let mainArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let last = mainArray[mainArray.length - 1];

        if(!last || size === last.length) {
            mainArray.push([element]);
        } else{
            last.push(element);
        }
    }
    return mainArray;
}

// Solution 3
function chunk(array, size) {

    let mainArray = [];

    for (let i = 0; i < array.length; i = i + size) {
        mainArray.push(array.slice(i, i + size));
    }
    return mainArray;
}

module.exports = chunk;