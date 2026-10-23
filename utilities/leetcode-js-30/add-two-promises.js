async function addTwoPromises(promise1, promise2) {
  // const res = Promise.all([promise1, promise2]).then(
  //   ([val1, val2]) => val1 + val2,
  // );
  // return res;

  const val1 = await promise1;
  const val2 = await promise2;

  return val1 + val2;
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2).then((res) => console.log(res));

const res = await addTwoPromises(promise1, promise2);
console.log(res);
