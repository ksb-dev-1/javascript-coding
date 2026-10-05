function secondLargest(nums) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] < firstLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest === -Infinity ? -1 : secondLargest;
}

const nums = [12, 1, 35, 10, 34, 1];
// const nums = [10, 10, 10, 10, 10];

console.log(secondLargest(nums));
