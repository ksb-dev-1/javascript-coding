function cancellable(fn, args, t) {
  fn(...args);

  const intervalId = setInterval(() => fn(...args), t);

  function cancelFn() {
    clearInterval(intervalId);
  }
  return cancelFn;
}

function add(a, b) {
  console.log(a + b);
}

const args = [5, 10];
const t = 3000;

const cancelFn = cancellable(add, args, t);

// setTimeout(cancelFn, 2000);
setTimeout(cancelFn, 4000);
