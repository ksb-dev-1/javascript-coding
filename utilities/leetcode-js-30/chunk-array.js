function chunk(arr, size) {
  const res = [];
  let currChunk = [];

  for (let i = 0; i < arr.length; i++) {
    currChunk.push(arr[i]);

    if (currChunk.length === size || i === arr.length - 1) {
      res.push(currChunk);
      currChunk = [];
    }
  }
  return res;
}

/*

function chunk(arr, size) {
  const chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

*/

const arr = [1, 2, 3, 4, 5],
  size = 1;

// const arr = [1, 9, 6, 3, 2],
//   size = 3;

// const arr = [8, 5, 3, 2, 6],
//   size = 6;

// const arr = [],
//   size = 1;

console.log(chunk(arr, size));
