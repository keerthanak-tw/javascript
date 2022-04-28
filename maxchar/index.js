// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const countMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         countMap[char] = countMap[char] + 1 || 1;
//     }
//     for (let char in countMap) {
//         if (countMap[char] > max) {
//             max = countMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

module.exports = maxChar;


// Another solution
function maxChar(str) {
    const max = { count: 0 };
    str.split('').reduce((countMap, current) => {
        countMap[current] = countMap[current] + 1 || 1;
        if (countMap[current] > max.count) {
            max.count = countMap[current];
            max.char = current;
        }
        return countMap;
    }, {});

    return max.char;
}
