/*

array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

- executes a reducer function for array element.
- returns a single value: the function's accumulated result.
- does not execute the function for empty array elements.
- does not change the original array.

*/

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myFilter can not be called on null or undefined",
    );
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  let accumulator;
  let startIndex = 0;

  if (arguments.length < 2) {
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }

    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[startIndex];
    startIndex++;
  } else {
    accumulator = initialValue;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const nums = [1, 2, 3, 4, 5];

const result = nums.myReduce((acc, num) => acc + num, 0);

console.log(result);
