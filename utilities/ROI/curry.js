/*

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...next) {
      return curried(...args, ...next);
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));

*/

function curry(fn) {
  return function curried(...args) {
    const context = this;

    if (args.length >= fn.length) {
      return fn.apply(context, args);
    }

    return function (...next) {
      return curried.apply(context, [...args, ...next]);
    };
  };
}

const user = {
  name: "Alex",

  introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  },
};

const curriedIntroduce = curry(user.introduce);

console.log(curriedIntroduce.call(user, "Hello")("!"));
