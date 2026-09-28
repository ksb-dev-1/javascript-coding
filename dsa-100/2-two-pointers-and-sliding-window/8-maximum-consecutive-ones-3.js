/*

🟡 1004. Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:
----------

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6

Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
----------

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10

Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Constraints:
------------

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/

function maximumConsecutiveOnes(nums, k) {
  let left = 0;
  let zeroesCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroesCount++;
    }

    if (zeroesCount > k) {
      if (nums[left] === 0) {
        zeroesCount--;
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// const k = 2;

const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k = 3;

console.log(maximumConsecutiveOnes(nums, k));
