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

const Node = require("./node");

function levelWidth(root) {
    let queue = [root, "s"];
    let counters = [0];
    let level = 0;

    while (queue.length > 1) {
        let element = queue.shift();
        if (element === "s") {
            queue.push(element);
            level++;
        } else {
            counters[level] = counters[level] + 1 || 1;
            queue.push(...element.children);
        }
    }
    return counters;
}

let node = new Node(1);

node.add(2);
node.add(3);
node.add(4);

node.children[0].add(5);
node.children[2].add(6);

levelWidth(node);

module.exports = levelWidth;
