/*

function nextGreaterElement(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    let nextGreater = -1;

    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums1[i]) {
            nextGreater = nums2[k];
            break;
          }
        }
        break;
      }
    }
    res.push(nextGreater);
  }
  return res;
}

*/

function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      const smaller = stack.pop();
      map.set(smaller, num);
    }
    stack.push(num);
  }
  return nums1.map((num) => map.get(num) ?? -1);
}

// const nums1 = [4, 1, 2];
// const nums2 = [1, 3, 4, 2];

const nums1 = [2, 4];
const nums2 = [1, 2, 3, 4];

console.log(nextGreaterElement(nums1, nums2));
