function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

function greet(name) {
  console.log("Hello", name);
  return `Welcome, ${name}!`;
}

const greetOnce = once(greet);

console.log(greetOnce("Alex")); // Logs: Hello Alex
// Returns: "Welcome, Alex!"

console.log(greetOnce("Sam")); // Returns: "Welcome, Alex!"
console.log(greetOnce("John")); // Returns: "Welcome, Alex!"
