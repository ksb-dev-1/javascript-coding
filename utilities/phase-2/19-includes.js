Array.prototype.myIncludes = function (element, start = 0) {
  if (this == null) {
    throw new TypeError("Cannot call myIncludes on null or undefined");
  }

  const obj = Object(this);
  const len = Math.min(
    Math.max(Math.trunc(Number(obj.length) || 0), 0),
    Number.MAX_SAFE_INTEGER,
  );

  if (len === 0) return false;

  start = Number(start);

  if (Number.isNaN(start)) start = 0;
  if (start === Infinity) return false;
  if (start === -Infinity) start = 0;

  start = Math.trunc(start);

  if (start < 0) {
    start = Math.max(len + start, 0);
  }

  for (let i = start; i < len; i++) {
    const value = obj[i];

    if (value === element || (Number.isNaN(value) && Number.isNaN(element))) {
      return true;
    }
  }
  return false;
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Apple", -10));

const obj = {
  0: "apple",
  1: "banana",
  2: "mango",
  length: 3,
};

console.log(Array.prototype.myIncludes.call(obj, "banana"));
// true

console.log(Array.prototype.myIncludes.call(obj, "mango", -1));
// true

console.log(Array.prototype.myIncludes.call(obj, "grape"));
// false

// if (!Array.prototype.myIncludes) {
//   Object.defineProperty(Array.prototype, "myIncludes", {
//     value: function (element, start = 0) {
//       if (this == null) {
//         throw new TypeError("Cannot call myIncludes on null or undefined");
//       }

//       const obj = Object(this);

//       // Clamp length to a valid integer between 0 and MAX_SAFE_INTEGER
//       const len = Math.min(
//         Math.max(Math.trunc(Number(obj.length) || 0), 0),
//         Number.MAX_SAFE_INTEGER
//       );

//       if (len === 0) return false;

//       // Normalize start
//       start = Number(start);

//       if (Number.isNaN(start)) start = 0;
//       if (start === Infinity) return false;
//       if (start === -Infinity) start = 0;

//       start = Math.trunc(start);

//       // Negative start counts from the end
//       if (start < 0) {
//         start = Math.max(len + start, 0);
//       }

//       for (let i = start; i < len; i++) {
//         const value = obj[i];

//         // === handles normal values (and treats 0 and -0 as equal),
//         // the second check makes NaN match NaN
//         if (value === element || (Number.isNaN(value) && Number.isNaN(element))) {
//           return true;
//         }
//       }

//       return false;
//     },
//     writable: true,
//     configurable: true,
//     enumerable: false, // keeps it out of for...in loops
//   });
// }
