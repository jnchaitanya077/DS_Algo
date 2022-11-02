// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 0; i < n; i++) {
        let txt = '';
        for (let j = 0; j < n; j++) {
            if(j > i ) {
                txt += ' ';
            } else {
                txt += '#';
            }
        }
        console.log(txt);
    }
}

function steps(n) {
  let txt = "";

  for (let index = 0; index < n; index++) {
    txt += "#";
  }

  for (let index = 0; index < n; index++) {

    let first = txt.substring(0, index + 1);
    let second = txt.substring(index + 1).replace(/#/g, " ");

    console.log(first + second);
  }
}

module.exports = steps;
