class Stack {
    constructor() {
        this.stack = [];
    }

    push(n) {
        this.stack.push(n);
    }

    pop(n) {
        if(this.stack.length === 0)
            console.log("Stack is currently empty.")
        else
            this.stack.pop(n);
    }

    check() {
        console.log(this.stack);
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”