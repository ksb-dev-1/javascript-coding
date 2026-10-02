/*

Syntax
-------
array.slice(start, end)

Parameters
-----------
start -	 Optional.
         Start position. Default is 0.
         Negative numbers select from the end of the array.
end	  -  Optional.
         End position. Default is last element.
         Negative numbers select from the end of the array.

Return Value
-------------
A new array containing the selected elements.

- returns selected elements in a new array.
- selects from a given start, up to a (not inclusive) given end.
- does not change the original array.

*/

Array.prototype.mySlice = function (start, end) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.mySlice can not be called on null or undefined",
    );
  }

  const length = this.length;

  if (start === undefined) start = 0;
  if (end === undefined) end = length;

  if (start < 0) start = length + start;
  if (end < 0) end = length + end;

  start = Math.max(0, Math.min(start, length));
  end = Math.max(0, Math.min(end, length));

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.mySlice());
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]

console.log(fruits.mySlice(0));
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]

console.log(fruits.mySlice(0, 0));
// []

console.log(fruits.mySlice(0, 1));
// ["Banana"]

console.log(fruits.mySlice(1, 4));
// ["Orange", "Lemon", "Apple"]

console.log(fruits.mySlice(4, 5));
// ["Mango"]

console.log(fruits.mySlice(5));
// []

console.log(fruits.mySlice(100));
// []

console.log(fruits.mySlice(1, 100));
// ["Orange", "Lemon", "Apple", "Mango"]

console.log(fruits.mySlice(-1));
// ["Mango"]

console.log(fruits.mySlice(-2));
// ["Apple", "Mango"]

console.log(fruits.mySlice(-5));
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]

console.log(fruits.mySlice(-100));
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]

console.log(fruits.mySlice(1, -1));
// ["Orange", "Lemon", "Apple"]

console.log(fruits.mySlice(-4, -1));
// ["Orange", "Lemon", "Apple"]

console.log(fruits.mySlice(-5, 0));
// []

console.log(fruits.mySlice(-5, -5));
// []

console.log(fruits.mySlice(4, 2));
// []  // start is after end

console.log(fruits.mySlice(5, 2));
// []  // start is after end
