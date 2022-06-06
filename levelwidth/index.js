// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const nodes = [root, 'n'];
    const counterArr = [0];

    while(nodes.length > 1) {
        const nodeToProcess = nodes.shift();
        if (nodeToProcess !== 'n') {
            counterArr[counterArr.length - 1]++;
            nodes.push(...nodeToProcess.children);
        } else {
            nodes.push('n');
            counterArr.push(0);
        }
    }
    
    return counterArr;
}

module.exports = levelWidth;
