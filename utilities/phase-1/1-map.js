/*

Syntax
-------
array.map(function(currentValue, index, arr), thisValue)

Parameters
-----------
function()   -	Required.
                A function to be run for each array element.
currentValue -	Required.
                The value of the current element.
index	       -  Optional.
                The index of the current element.
arr	         -  Optional.
                The array of the current element.
thisArg	     -  Optional.
                Default value undefined.
                A value passed to the function to be used as its this value.

Return Value
-------------
An array - The results of a function for each array element.

- creates a new array from calling a function for every array element.
- does not execute the function for empty elements.
- does not change the original array.

*/

Array.prototype.myMap = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myMap can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const length = this.length;
  const res = new Array(length);

  for (let i = 0; i < length; i++) {
    if (!(i in this)) continue;

    res[i] = callbackFn.call(thisArg, this[i], i, this);
  }
  return res;
};

const nums = [1, 2, 3, 4, 5];

const res = nums.myMap((num) => {
  // nums.push(100);
  return num * 2;
});
console.log(res);

// --------------------------------------

const multiplier = {
  x: 10,
};

const result = nums.myMap(function (num) {
  return num * this.x;
}, multiplier);

console.log(result);
