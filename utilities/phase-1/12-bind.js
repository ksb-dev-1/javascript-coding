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
