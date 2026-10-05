/*

53. Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
----------

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.

Example 2:
----------

Input: nums = [1]
Output: 1
Explanation: The subarray[1] has the largest sum 1.

Example 3:
----------

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:
------------

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

// Brute force

/*

function maxSubarray(nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}

*/

// Optimized (Kadane's algorithm)
function maxSubarray(nums) {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1];
// const nums = [5, 4, -1, 7, 8];

console.log(maxSubarray(nums));
