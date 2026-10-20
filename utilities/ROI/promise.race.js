function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  });
}

PromiseRace([
  new Promise((resolve) => setTimeout(() => resolve("A"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("B"), 500)),
]).then(console.log);

/*

function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      // Promise.resolve wraps plain values (like 1) into promises
      // The first promise to settle calls resolve or reject; later calls are ignored
      Promise.resolve(promise).then(resolve, reject);
    }
  });
}

*/
