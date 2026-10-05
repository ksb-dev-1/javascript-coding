/*

169. Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
----------

Input: nums = [3,2,3]
Output: 3

Example 2:
----------

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
------------

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.

Follow-up: Could you solve the problem in linear time and in O(1) space?

*/

// Brute force

/*

function majorityElement(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > nums.length / 2) {
      return nums[i];
    }
  }
}

*/

// Optimized (Boyer–Moore Voting Algorithm)

function majorityElement(nums) {
  let count = 0;
  let candidate = -1;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

const nums = [3, 2, 3];
// const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
