// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    
    let mid = Math.floor(((2*n) - 1)/2);

    for (let row = 0; row < n; row++) {
        let txt = '';
        for (let col = 0; col < 2*n-1; col++) {
            if(col < (mid - row) || col > (mid + row) ) {
                txt += ' ';
            }
            else {
                txt += '#';
            }
        }
        console.log(txt);
    }
}

// Solution 2
function pyramid(n, row=0, step='') {

    if(row === n) {
        return;
    }
    if(step.length === (2*n)-1) {
        console.log(step);
        return pyramid(n, row + 1);
    }
    if(step.length < Math.floor((((2*n) - 1)/2) - row) || step.length > Math.floor((((2*n) - 1)/2) + row)) {
        step += ' ';
    } else{
        step += '#';
    }
    pyramid(n, row, step);
}

module.exports = pyramid;

