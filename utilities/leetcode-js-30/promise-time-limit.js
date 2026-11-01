function timeLimit(fn, t) {
  return async function (...args) {
    const rejectedPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([fn(...args), rejectedPromise]);

    // return new Promise(async (resolve, reject) => {
    //     const timerId = setTimeout(() => reject("Time Limit Exceeded"), t);

    //     fn(...args)
    //         .then(resolve)
    //         .catch(reject)
    //         .finally(() => clearTimeout(timerId));

    //     // try {
    //     //     const result = await fn(...args);
    //     //     resolve(result);
    //     // }
    //     // catch(error) {
    //     //     reject(error);
    //     // }
    //     // finally {
    //     //     clearTimeout(timerId);
    //     // }
    // })
  };
}
