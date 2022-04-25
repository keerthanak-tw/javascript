// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My solution
function reverse(str) {
    return str.split('').reverse().join('');
}

module.exports = reverse;

// Course soution 1
// The built-in function reverse helps to reverse an array
// Hence, convert the string into array by splitting
// Use built in function
// Join the array element using join function
function reverseOne (str) {
    return str.split('').reverse().join('');
}

// Course solution 2
function reverseTwo (str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// Course solution 3
function reverseThree (str) {
    return str.split('').reduce((reversed, char) =>  char + reversed, '');
}
