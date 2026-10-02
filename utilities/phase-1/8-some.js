/*

Syntax
-------
array.some(function(currentValue, index, arr), thisValue)

Parameters
-----------
function()   -	Required.
                A function to run for each array element.
currentValue -	Required.
                The value of the current element.
index	       -  Optional.
                The index of the current element.
arr	         -  Optional.
                The array of the current element.
thisValue	   -  Optional.
                Default undefined.
                A value passed to the function as its this value.

Return Value
-------------
The value of the first element that pass the test. Otherwise it returns undefined.

- checks if any array elements pass a test (provided as a callback function).
- executes the callback function once for each array element.
- returns true (and stops) if the function returns true for one of the array elements.
- returns false if the function returns false for all of the array elements.
- does not execute the function for empty array elements.
- does not change the original array.

*/

Array.prototype.mySome = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.mySome can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const nums = [1, 2, 3, 4, 5];

const result = nums.mySome((num) => {
  return num > 4;
});

console.log(result);
