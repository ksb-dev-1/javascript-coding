/*

call() is a JavaScript function method used to invoke a function immediately while explicitly setting the value of this. It also allows passing arguments one by one.

- calls a function with a given this value.
- lets objects borrow methods from other objects.

Syntax
-------
function.call(context, ...args)

Parameters
----------
function	-  Required.
             The function to call.
object	  -  Required.
             The object to call with the function.
arguments	-  Optional.
             Array-like object with function arguments.

Return Value
-------------
Value	The result of the function.

*/

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`);
  }

  context == null ? globalThis : Object(context);
  const uniqueKey = Symbol("fn");
  context[uniqueKey] = this;

  try {
    return context[uniqueKey](...args);
  } finally {
    delete context[uniqueKey];
  }
};

/* // Example: 1 - Normal use case

function greet(greeting, age) {
  return `${greeting} ${this.name} ${age}`;
}

const user = { name: "Kedar" };

console.log(greet.myCall(user, "Hello", 25)); // Hello Kedar 25

*/

/* // Example: 2 - null context → globalThis

function show() {
  return this;
}

console.log(show.myCall(null)); // global object (window in browser / global in Node)

*/

/* // Example: 3 - undefined context

function show() {
  return this;
}

console.log(show.myCall(undefined)); // global object

*/

/* // Example: 4 - primitive context (boxing behavior)

function showType() {
  return typeof this;
}

console.log(showType.myCall(10)); // object

console.log(showType.myCall("hello")); // object

*/

/* // Example: 5 - No arguments passed

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myCall(user)); // Hi John

*/

/* // Example: 6 - multiple arguments

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.myCall(null, 1, 2, 3)); // 6

*/

/* // Example: 7 - function borrowing

const person1 = {
  name: "Kedar",
  getName(age) {
    return `${this.name} ${age}`;
  }
};

const person2 = { name: "John" };

console.log(person1.getName.myCall(person2, 30)); // John 30

*/

/* // Example: 8 - args spread correctness

function join(a, b, c, d) {
  return [a, b, c, d];
}

console.log(join.myCall(null, 1, 2, 3, 4)); // [1, 2, 3, 4]

*/

/* // Example: 9 - missing arguments become undefined

function test(a, b, c) {
  return [a, b, c];
}

console.log(test.myCall(null, 1));// [1, undefined, undefined]

*/

/* // Example: 10 - function as constructor-like context

function show() {
  return this.value;
}

console.log(show.myCall({ value: 99 })); // 99

*/

/* // Example: 11 - detached method call

const obj = {
  value: 50,
  get() {
    return this.value;
  }
};

const detached = obj.get;

console.log(detached.myCall({ value: 100 })); // 100

*/

/* // Example: 12 - error when not function

try {
  Function.prototype.myCall.call({}, {});
} catch (error) {
  console.log(error.message);
}
// TypeError: ... is not a function

*/

/* // Example: 13 - symbol isolation check (no overwrite)

function test() {
  return Object.getOwnPropertySymbols(this).length;
}

const obj = {};

test.myCall(obj);

console.log(Object.keys(obj).length); // 0  (ensures no pollution)

*/
