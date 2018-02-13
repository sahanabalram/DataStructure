let DoublyLinkedList = function () {
    this.length = 0;
    this.head = null;
    this.tail = null;
}

let Node = function (value) {
    this.value = value;
    this.next = null;
}

DoublyLinkedList.prototype.insertFront = function(value) {
    let node = new Node(value);

    if(!this.head === null) {
        this.head = node;
        this.tail =node;
    } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
}
