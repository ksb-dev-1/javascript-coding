/*

238. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
----------

Input: nums = [1,2,3,4]
Output: [24, 12, 8, 6]

Example 2:
----------

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:
------------

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

// Brute force

/*

function productExceptSelf(nums) {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    ans.push(product);
  }
  return ans;
}

*/

// Optimized

/*

function productExceptSelf(nums) {
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);
  const ans = new Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = left[i] * right[i];
  }
  return ans;
}

*/

// More optimized

function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
