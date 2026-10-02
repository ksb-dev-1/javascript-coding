/*

Syntax
-------
array.find(function(currentValue, index, arr), thisValue)

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

- returns the value of the first element that passes a test.
- executes a function for each array element.
- returns undefined if no elements are found.
- does not execute the function for empty elements.
- does not change the original array.

*/

Array.prototype.myFind = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myFind can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const nums = [1, 2, 3, 4, 5];

const result = nums.myFind((num) => {
  return num % 2 === 0;
});

console.log(result);
