/*

function flatten(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      res.push(...flatten(nums[i]));
    } else {
      res.push(nums[i]);
    }
  }
  return res;
}

*/

/*

function flatten(nums, depth = 1) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i]) && depth > 0) {
      res.push(...flatten(nums[i], depth - 1));
    } else {
      res.push(nums[i]);
    }
  }
  return res;
}

*/

/*

function flatten(nums) {
  const stack = [nums];
  const res = [];

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      res.push(item);
    }
  }
  return res;
}

*/

function flatten(nums, depth = 1) {
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    stack.push([nums[i], depth]); // children start at FULL depth
  }
  const res = [];

  while (stack.length) {
    const [item, d] = stack.pop();

    if (Array.isArray(item) && d > 0) {
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push([item[i], d - 1]);
      }
    } else {
      res.push(item);
    }
  }
  return res;
}

const nums = [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]], [10], 11];
console.log(flatten(nums, 1));
