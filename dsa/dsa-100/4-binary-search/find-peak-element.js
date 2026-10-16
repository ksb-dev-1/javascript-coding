function findPeak(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      // Going uphill: a peak exists to the right.
      left = mid + 1;
    } else {
      // Going downhill: mid could be a peak.
      right = mid;
    }
  }
  return left;
}

const nums = [1, 2, 3, 1];
// const nums = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeak(nums));
