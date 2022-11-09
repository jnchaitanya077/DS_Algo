// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor () {
        this.stack_main = new Stack();
        this.stack_secondary = new Stack();
    }

    #copy (source, destination) {

        while (source.peek()) {
            destination.push(source.pop());
        }

    }

    add (record) {
        this.stack_main.push(record);
    }

    peek () {
        let element = null;
        this.#copy(this.stack_main, this.stack_secondary);
        element = this.stack_secondary.peek();
        this.#copy(this.stack_secondary, this.stack_main);
        return element;
    }

    remove() {
        let element = null;
        this.#copy(this.stack_main, this.stack_secondary);
        element = this.stack_secondary.pop();
        this.#copy(this.stack_secondary, this.stack_main);
        return element;
    }
}

module.exports = Queue;
