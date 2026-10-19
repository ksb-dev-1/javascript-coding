/*

function memoize(fn) {
  const cache = new Map();

  return function (key) {
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(key);
    cache.set(key, result);
    return result;
  };
}

function slowDouble(n) {
  console.log("calculating...");
  return n * 2;
}

const fastDouble = memoize(slowDouble);

console.log(fastDouble(5)); // prints "calculating...", returns 10
console.log(fastDouble(5)); // prints nothing, returns 10 (from the cache)
console.log(fastDouble(6)); // prints "calculating...", returns 12

*/

// ------------------------------------------------------------------------

/*

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    // 1. collect all arguments in an array
    const key = JSON.stringify(args); // 2. turn the array into one string key

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args); // 3. spread the array back into arguments
    cache.set(key, result);
    return result;
  };
}

const add = memoize((a, b) => {
  console.log("calculating...");
  return a + b;
});

console.log(add(1, 2)); // calculating... 3
console.log(add(1, 2)); // 3 (cached)
console.log(add(1, 5)); // calculating... 6

*/

// ------------------------------------------------------------------------

/*

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    // 1. collect all arguments in an array
    const key = JSON.stringify(args); // 2. turn the array into one string key

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args); // 3. spread the array back into arguments
    cache.set(key, result);
    return result;
  };
}

const obj = {
  factor: 3,
  multiply(n) {
    console.log("Calculating...");
    return n * this.factor;
  },
};

obj.multiply = memoize(obj.multiply);
console.log(obj.multiply(5));
console.log(obj.multiply(5));
console.log(obj.multiply(6));

*/

// ------------------------------------------------------------------------

/*

JSON.stringify can’t tell null and undefined apart, and it fails on circular objects. To fix that I’d let the caller pass in their own key function.

*/

/*

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args, (key, value) =>
      value === undefined ? "__undefined__" : value,
    );

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

*/

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let current = cache;

    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    if (current.has("result")) {
      return current.get("result");
    }

    const result = fn.apply(this, args);
    current.set("result", result);

    return result;
  };
}

function add(a, b) {
  console.log("Function executed");
  return a + b;
}

const memoizedAdd = memoize(add);

memoizedAdd(2, 3); // Executes add, returns 5
memoizedAdd(2, 3); // Returns cached 5
memoizedAdd(2, 4); // Executes add, returns 6

// function add(a, b) {
//   console.log("Function executed");
//   return a + b;
// }

// const memoizedAdd = memoize(add);

// console.log(memoizedAdd(null, 2));
// console.log(memoizedAdd(undefined, 2));

// console.log(memoizedAdd(null, 2));
// console.log(memoizedAdd(undefined, 2));
