/* What is Doubly Linked list
A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes */

let DoublyLinkedList = function () {
    this.length = 0;
    this.head = null;
    this.tail = null;
}

let Node = function (value) {
    this.value = value;
    this.next = null;
    this.previous = null;
}

DoublyLinkedList.prototype.printAll = function () {
    console.log(this);
}
DoublyLinkedList.prototype.print = function () {
    temp = this.head;
    while (temp != null) {
        console.log(temp.value);
        temp = temp.next;
    }
}
DoublyLinkedList.prototype.insertFront = function (value) {
    let node = new Node(value);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
};
DoublyLinkedList.prototype.insertFirst = function(value) {
    let currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === value) {
            let node = new Node(value);
            if(currentNode === this.tail) {
                this.add(value);
            } else {
                currentNode.next.previous = node;
                node.previous = currentNode;
                node.next = currentNode.next;
                currentNode.next = node;
            }
            this.length++;
        }
        currentNode = currentNode.next;
    }
};
DoublyLinkedList.prototype.delete = function (value) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            if (currentNode === this.head && currentNode === this.tail) {
                this.head = null;
                this.tail = null;
            } else if (currentNode === this.head) {
                this.head = this.head.next;
                this.head.previous = null;
            } else if (currentNode === this.tail) {
                this.tail = this.tail.previous;
                this.tail.next = null;
            } else {
                currentNode.previous.next = currentNode.next;
                currentNode.next.previous = current.previous;
            }
            this.length--;
        }
        currentNode = currentNode.next;
    }
};
head = new DoublyLinkedList();
head.insertFront(20);
head.insertFront(21);
head.insertFront(22);
head.insertFront(16);
head.insertFirst(8);
head.insertFirst(10);
head.print();
head.delete(20);
head.print();
head.printAll();