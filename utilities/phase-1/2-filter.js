/*

Syntax
-------
array.filter(function(currentValue, index, arr), thisValue)

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
An array of elements that pass the test. An empty array if no elements pass the test.

- creates a new array from calling a function for every array element.
- does not execute the function for empty elements.
- does not change the original array.

*/

Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myFilter can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const length = this.length;
  const res = [];

  for (let i = 0; i < length; i++) {
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const nums = [1, 2, 3, 4, 5];

const res = nums.myFilter((num) => {
  // nums.push(100);
  return num > 2;
});
console.log(res);

// --------------------------------------

const multiplier = {
  x: 3,
};

const result = nums.myFilter(function (num) {
  return num < this.x;
}, multiplier);

console.log(result);
