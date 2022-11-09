// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let start = this.head;

        while (start) {
            count++;
            start = start.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        if (!node) return node;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
        return;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = prev.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    insertLast(data) {
        let last = this.getLast();
        let node = new Node(data);

        if (!last) {
            this.head = node;
            return;
        }

        last.next = node;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node && counter !== index) {
            node = node.next;
            counter++;
        }

        return node;
    }

    // removeAt(index) {
    //     if (index + 1 > this.size()) return;

    //     if (index === 0) this.removeFirst();
    //     if (index === this.size() - 1) return this.removeLast();

    //     let counter = 0;
    //     let node = this.head;

    //     while (node) {
    //         if (counter + 1 === index) {
    //             node.next = node.next.next;
    //             return;
    //         }
    //         node = node.next;
    //         counter++;
    //     }
    // }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let previous = this.getAt(index - 1);
        // handles edge case when index given greater than linked list size.
        if (previous && previous.next) {
            previous.next = previous.next.next;
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let previous = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
