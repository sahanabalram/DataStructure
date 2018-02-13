let LinkedList = function () {
    this.length = 0;
    this.head = null;
}

let Node = function (value) {
    this.value = value;
    this.next = null;
}
// size of the linkedlist will take head and
LinkedList.prototype.size = function () {
    return this.length;
}

LinkedList.prototype.printListObject = function () {
    console.log(this);
}

LinkedList.prototype.print = function () {
    temp = this.head;
    while (temp != null) {
        console.log(temp.value);
        temp = temp.next;
    }
}

// enque in the back
LinkedList.prototype.insertEnd = function (value) {
    node = new Node(value);
    temp = this.head;
    previous = null;
    while (temp != null) {
        previous = temp; // 10
        temp = temp.next; // 10.next == null
    }
    if (previous) {
        // insert all other nodes
        previous.next = node; // 10.next = 1, 1.next = null
    } else {
        // insert first node
        this.head = node;
    }
    this.length++;
    return this;
}

LinkedList.prototype.insertFront = function (value) {
    // save previous head
    previous_head = this.head;
    // create a new head node
    node = new Node(value);
    // update new nodes next to previous head
    node.next = previous_head;
    // update head to point to new node created
    this.head = node;
    return this;
}

LinkedList.prototype.delete = function (value) {
    currentNode = this.head;
    previousNode = null;
    while (currentNode != null) {
        if (currentNode.value === value) {
            if (previousNode != null) {
                previousNode.next = currentNode.next;
            } else {
                this.head = null;
            }
            break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
}

head = new LinkedList();
head.insertEnd(10);
head.insertFront(5);
head.insertFront(1);
head.insertEnd(20);
head.insertEnd(100);
head.print();
head.delete(20);
head.print();
head.printListObject();

// head->1->5->10->20->null