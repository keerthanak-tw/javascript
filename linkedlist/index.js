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
        this.insertAt(data, 0);
        // this.head = new Node(data, this.head);
    }

    size() {
        let length = 0;
        let node = this.head;

        while(node) {
            length++;
            node = node.next;
        }
        return length;
    }

    getFirst() {
        return this.getAt(0);
        // return this.head;
    }

    getLast() {
        return this.getAt(this.size() - 1);
        // let node = this.head;
        // if (!node) {
        //     return null;
        // }

        // while(node.next) {
        //     node = node.next;
        // }
        // return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.removeAt(0);
        // if (!this.head) { return; }
        // this.head = this.head.next;
    }

    removeLast() {
        this.removeAt(this.size() - 1);
        // if (!this.head) {
        //     return;
        // }
        // if (!this.head.next) {
        //     this.head = null;
        //     return;
        // }
        // let previous = this.head;
        // let nextNode = this.head.next;
        // while(nextNode.next) {
        //     previous = nextNode;
        //     nextNode = nextNode.next;
        // }
        // previous.next = null;
    }

    insertLast(data) {
        this.insertAt(data, this.size());
        // const newNode = new Node(data);
        // const lastNode = this.getLast();
        // if (!lastNode) {
        //     this.head = newNode;
        //     return;   
        // }
        // lastNode.next = newNode;
    }

    getAt(position) {
        let currentPosition = 0;
        let currentNode = this.head;

        while (currentPosition !== position && currentNode) {
            currentNode = currentNode.next;
            currentPosition++;
        }

        return currentNode;
    }

    removeAt(position) {
        if (!this.head) {
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        const previousNode = this.getAt(position - 1);
        if (!previousNode || !previousNode.next) {
            return;
        }
        previousNode.next = previousNode.next.next;
    }

    insertAt(data, position) {
        const newNode = new Node(data);
        if (!this.head || position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        const previousNode = this.getAt(position - 1) || this.getLast();
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }

    forEach(cb) {
        let node = this.head;
        while (node) {
            cb(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
