/*

function minSubArrayLen(target, nums) {
  let minLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === target) {
        if (minLength === 0) {
          minLength = j - i + 1;
        } else {
          minLength = Math.min(minLength, j - i + 1);
        }
      }
    }
  }
  return minLength;
}

*/

function minSubArrayLen(target, nums) {
  let left = 0;
  let minLength = Infinity;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

// const target = 4;
// const nums = [1, 4, 4];

// const target = 11;
// const nums = [1, 1, 1, 1, 1, 1, 1, 1];

console.log(minSubArrayLen(target, nums));
