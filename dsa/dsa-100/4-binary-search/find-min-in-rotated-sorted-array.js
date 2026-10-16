function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

const nums = [3, 4, 5, 1, 2];
// const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [11, 13, 15, 17];

console.log(findMin(nums));
