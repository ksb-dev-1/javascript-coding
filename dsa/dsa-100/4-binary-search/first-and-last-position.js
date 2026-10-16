function searchRange(nums, target) {
  function findFirst() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  function findLast() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
  return [findFirst(), findLast()];
}

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 6;

// const nums = [];
// const target = 0;

console.log(searchRange(nums, target));
