/*

283. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
----------

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
----------

Input: nums = [0]
Output: [0]

Constraints:
------------

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done?

*/

/*


function moveZeroes(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[count++] = 0;
  }
  return nums;
}

*/

function moveZeroes(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
  return nums;
}

// const nums = [0, 1, 0, 3, 12];
const nums = [0];

console.log(moveZeroes(nums));
