/*

apply() is a JavaScript function method used to invoke a function immediately while explicitly setting the value of this. Arguments are passed as an array (or array-like object).

- calls a function with a given this value.
- lets objects borrow methods from other objects.

Syntax
-------
function.apply(context, ...args)

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

// Function.prototype.myApply = function (context, args = []) {
//   if (typeof this !== "function") {
//     throw new TypeError(`${this} is not a function`);
//   }

//   context = context == null ? globalThis : Object(context);
//   const uniqueKey = Symbol("fn");
//   context[uniqueKey] = this;

//   try {
//     return context[uniqueKey](...args);
//   } finally {
//     delete context[uniqueKey];
//   }
// };

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  context = context == null ? globalThis : Object(context);
  const fnKey = Symbol("fn");
  context[fnKey] = this;

  try {
    if (args == null) {
      return context[fnKey]();
    }

    if (typeof args !== "object" && typeof args !== "function") {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    const length = Number(args.length) || 0;
    const finalArgs = [];

    for (let i = 0; i < length; i++) {
      finalArgs.push(args[i]);
    }

    return context[fnKey](...finalArgs);
  } finally {
    delete context[fnKey];
  }
};
