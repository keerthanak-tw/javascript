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
    for (let row = 0; row < n; ++row) {
        let string = '';
        for (let column = 0; column < n; ++column) {
            if (column <= row) {
                string += '#';
            } else {
                string += ' ';
            }
        }
        console.log(string);
    }
}

module.exports = steps;


function stepsWithRecursion(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return stepsWithRecursion(n, row + 1);
    }
    stair += stair.length <= row ? '#' : ' ';
    return stepsWithRecursion(n, row, stair);
}
