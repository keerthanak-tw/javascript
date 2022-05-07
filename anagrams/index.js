// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCountMap(str) {
    return str.split('').reduce((countMap, current) => {
        countMap[current] = countMap[current] + 1 || 1;
        return countMap;
    }, {});
}


function anagrams(stringA, stringB) {
    const countMapA = getCountMap(stringA.replace(/[^\w]/g, "").toLowerCase());
    const countMapB = getCountMap(stringB.replace(/[^\w]/g, "").toLowerCase());
    if (Object.keys(countMapA).length === Object.keys(countMapB).length &&
        Object.keys(countMapA).every((letter) => countMapA[letter] === countMapB[letter])) {
        return true;
    }
    return false;
}

module.exports = anagrams;

// Course solutions

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
function anagramsOne(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}
function anagramsWithHack(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
