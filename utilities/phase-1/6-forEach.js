/*

Syntax
-------
array.forEach(function(currentValue, index, arr), thisArg)

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
undefined

- calls a function for each element in an array.
- is not executed for empty elements.

*/

Array.prototype.myForEach = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myForEach can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (!(i in this)) continue;

    callbackFn.call(thisArg, this[i], i, this);
  }
};

const nums = [1, 2, 3, 4, 5];

nums.myForEach((num) => {
  console.log(num * 2);
});

console.log(nums);
