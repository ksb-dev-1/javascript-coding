const input = document.querySelector("#input");

// function throttle(callbackFn, delay = 1000) {
//   let lastCallTime = 0;

//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCallTime >= delay) {
//       lastCallTime = now;
//       callbackFn.apply(this, args);
//     }
//   };
// }

function throttle(callbackFn, delay = 1000) {
  let timerId = null;
  let lastArgs = null;

  return function (...args) {
    const context = this;
    lastArgs = args;

    if (!timerId) {
      // Execute immediately on leading edge
      callbackFn.apply(context, lastArgs);
      lastArgs = null;

      timerId = setTimeout(() => {
        timerId = null;
        // Execute trailing call if there were events during the wait
        if (lastArgs) {
          callbackFn.apply(context, lastArgs);
          lastArgs = null;
        }
      }, delay);
    }
  };
}

// 1. Target function to execute
function search(query) {
  console.log(`[EXECUTED] Search API called with query: "${query}"`);
}

// 2. Create throttled function with 2000ms (2 seconds) delay
const throttledSearch = throttle(search, 2000);

// 3. Simulate continuous typing
console.log("--- User starts typing ---");

// Time 0ms: User types 'a' (0ms since last execution)
throttledSearch("a");

// Time 500ms: User types 'ab' (Only 500ms passed out of 2000ms delay)
setTimeout(() => {
  throttledSearch("ab");
}, 500);

// Time 1000ms: User types 'abc' and stops (Only 1000ms passed out of 2000ms delay)
setTimeout(() => {
  throttledSearch("abc");
}, 1000);

// arrayProductExcludingCurrent(numbers) {
//   const res = new Array(numbers.length).fill(1);

//   let prefix = 1
//   for(let i = 0; i < numbers.length; i++){
//     res[i] = res[i] * prefix;
//     prefix *= numbers[i];
//   }

//   let suffix = 1;
//   for(let i = numbers.length - 1; i >= 0; i--){
//     res[i] = res[i] * suffix;
//     suffix *= numbers[i];
//   }
//   return res;
// }

// // const numbers = [1, 2, 3];
// const numbers = [2, 0, 3];
// console.log(arrayProductExcludingCurrent(numbers));
