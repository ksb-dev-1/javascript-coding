function isValid(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const last = stack.pop();

      if (
        (char === ")" && last !== "(") ||
        (char === "}" && last !== "{") ||
        (char === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// const s = "()"
const s = "()[]{}";
// const s = "(]";
// const s = "([])";
// const s = "([)]";

console.log(isValid(s));
