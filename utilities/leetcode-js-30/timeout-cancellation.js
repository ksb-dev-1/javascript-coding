function cancellable(fn, args, t) {
  const timerId = setTimeout(() => fn(...args), t);

  function cancelFn() {
    clearTimeout(timerId);
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
// setTimeout(cancelFn, 4000);
