function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    // Handle empty array case
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      // Ensure input is treated as a promise
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          // Resolve only when all promises are done
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject immediately on first failure
          reject(error);
        });
    });
  });
}

promiseAll([
  new Promise((resolve) => setTimeout(() => resolve("A"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("B"), 400)),
  new Promise((resolve) => setTimeout(() => resolve("C"), 500)),
])
  .then(console.log)
  .catch(console.log);

// promiseAll([
//   new Promise((resolve) => setTimeout(() => resolve("A"), 1000)),
//   new Promise((_, reject) => setTimeout(() => reject("B"), 400)),
//   new Promise((resolve) => setTimeout(() => resolve("C"), 500)),
// ])
//   .then(console.log)
//   .catch(console.log);
