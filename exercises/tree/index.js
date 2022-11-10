// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let nodes = [];
        // add root to the nodes array.
        nodes.push(this.root);

        while (nodes.length) {
            // pop the first element of the array
            let element = nodes.shift();
            // call the function
            fn(element);
            // add all other children to the nodes array
            nodes.push(...element.children);
        }
    }

    traverseDF(fn) {
        let nodes = [];
        nodes.push(this.root);

        while (nodes.length) {
            let element = nodes.shift();
            nodes.unshift(...element.children);
            fn(element);
        }
    }
}

// let tree = new Tree();
// let node = new Node(5);

// tree.root = node;
// node.add(1);
// node.add(2);
// node.add(3);
// node.children[0].add(4);
// node.children[0].add(5);

// tree.traverseDF((data) => console.log(data.data));
module.exports = { Tree, Node };
