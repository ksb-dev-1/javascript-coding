function reduce(nums, fn, init) {
  let res = init;

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
}

// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr * curr;
// };
// const init = 100;

const nums = [];
const fn = function sum(accum, curr) {
  return 0;
};
const init = 25;

console.log(reduce(nums, fn, init));
