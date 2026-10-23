function compose(functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    // for (let i = 0; i < functions.length; i++) {
    //   x = functions[i](x);
    // }
    return x;
  };
}

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x = 4;

const composed = compose(functions);

console.log(composed(x));
