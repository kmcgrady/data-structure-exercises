class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  pop() {
    return this._arr.pop();
  }

  length() {
    return this._arr.length;
  }
}

module.exports = Stack;
