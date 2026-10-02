/*

bind() is a JavaScript function method used to create and return a new function with a permanently bound this value. It does not invoke the function immediately.It also allows passing arguments one by one

Syntax
-------
method.bind(object, arg1,...,argN)

Parameters
-----------
method	       - Required.
                 The method to bind (the function to use).
object	       - Required.
                 The object to bind the method to (to use the funtion on).
arg1,...,argN	 - Optional.
                 The function arguments.

Return Value
-------------
Value	The result of the function.

*/

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  const fn = this;

  return function (...newArgs) {
    const finalContext = context == null ? globalThis : Object(context);

    return fn.apply(finalContext, [...args, ...newArgs]);
  };
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  const fn = this;

  function boundFunction(...newArgs) {
    if (this instanceof boundFunction) {
      return fn.apply(this, [...args, ...newArgs]);
    }

    const finalContext = context == null ? globalThis : Object(context);

    return fn.apply(finalContext, [...args, ...newArgs]);
  }

  if (fn.prototype) {
    boundFunction.prototype = Object.create(fn.prototype);
  }
  return boundFunction;
};

function Person(name) {
  this.name = name;
}

// -------------------------------------------------------

function greet(greeting, age) {
  return `${greeting}, ${this.name}. Age: ${age}`;
}
const user = { name: "John" };
const greetKedar = greet.myBind(user, "Hello");

console.log(greetKedar(25)); // Hello, John. Age: 25

// --------------------------------------------------------

// const fakeContext = { name: "Fake" };
// const BoundPerson = Person.myBind(fakeContext);
// const p = new BoundPerson("Kedar");

// console.log(p.name); // "Kedar"
// console.log(fakeContext.name); // "Fake"

// ---------------------------------------------------------

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const BoundPerson = Person.myBind({});

const p = new BoundPerson("Kedar");

p.sayHi(); // should work
