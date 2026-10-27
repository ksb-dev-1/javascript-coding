var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  this.stack.push(value);

  if (this.minStack.length === 0) {
    this.minStack.push(value);
  } else {
    const currentMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(value, currentMin));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

var obj = new MinStack();
obj.push(6);
obj.push(7);
obj.push(3);
obj.push(4);
obj.push(5);
console.log(obj.stack);
obj.pop();
console.log(obj.stack);
console.log(obj.top());
console.log(obj.getMin());
