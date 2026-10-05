/*

128. Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
----------

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.

Example 2:
----------

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
----------

Input: nums = [1,0,1,2]
Output: 3

Constraints:
------------

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// Brute force

/*

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let count = 1;
  let maxCount = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) {
      continue; // duplicate
    }

    if (nums[i + 1] - nums[i] === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 1;
    }
  }
  return maxCount;
}

*/

// Optimized

function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxCount = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;

      while (set.has(current + 1)) {
        count++;
        current++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
