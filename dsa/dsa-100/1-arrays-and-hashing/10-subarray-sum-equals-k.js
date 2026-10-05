/*

560. Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
----------

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
----------

Input: nums = [1,2,3], k = 3
Output: 2


Constraints:
------------

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

*/

// Brute force

/*

function subarraySum(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

*/

// Optimized

function subarraySum(nums, k) {
  const map = new Map();
  let count = 0;
  let sum = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// const nums = [1, 1, 1];
// const k = 2;

// const nums = [1, 2, 3];
// const k = 3;

const nums = [1, -1, 1];
const k = 1;

console.log(subarraySum(nums, k));
