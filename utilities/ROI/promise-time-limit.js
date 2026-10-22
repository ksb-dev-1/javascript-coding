/*

function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const timerId = setTimeout(() => reject("Time Limit Exceeded"), t);

      try {
        const result = await fn(...args);
        resolve(result);
      } catch (error) {
        reject(error);
      } finally {
        clearTimeout(timerId);
      }
    });
  };
}

*/

function timeLimit(fn, t) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([fn(...args), timeoutPromise]);
  };
}
