// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data, node = this) {
        if (data < node.data) {
            if (node.left) {
                node.insert(data, node.left);
            } else {
                node.left = new Node(data);
                return;
            }
        }
        if (data > node.data) {
            if (node.right) {
                node.insert(data, node.right);
            } else {
                node.right = new Node(data);
                return;
            }
        }
    }

    contains(data, node = this) {
        if (!node || data === node.data) {
            return node;
        }
        if (data < node.data) {
            return node.contains(data, node.left);
        }
        if (data > node.data) {
            return node.contains(data, node.right);
        }
    }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

console.log(node.contains(3));

module.exports = Node;
