var Stack = function() {
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count += 1;
}

Stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined;
    }
    this.count -= 1;
    let to_ret = this.storage[this.count]
    delete this.storage[this.count]
    return to_ret
}

Stack.prototype.print = function() {
    console.log(this.storage);
}

mystack = new Stack()
mystack.push(10)
mystack.push(25)
mystack.push(30)
mystack.print()
console.log(mystack.pop())
console.log(mystack.pop())
console.log(mystack.pop())