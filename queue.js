let Queue = function() {
    this.front = 0
    this.back = 0
    this.storage = {};
}

// size of the que 
Queue.prototype.size = function(value) {
    return this.back - this.front;
}

Queue.prototype.print = function(value) {
    console.log("Front of queue:", this.front);
    console.log("Back of queue:", this.back-1);
    console.log(this.storage)
}

// enque in the back
Queue.prototype.enqueue = function(value) {
    this.storage[this.back] = value
    this.back += 1
}

// deque in the front
Queue.prototype.dequeue = function() {
    if (this.front < this.back) {
        let result = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1
        return result
    }
    return undefined
}

que = new Queue();
que.enqueue('a')
que.enqueue('b')
que.enqueue('c')
que.enqueue('d')
que.print()
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
console.log(que.dequeue())
que.print()