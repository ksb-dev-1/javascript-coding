/*
==================================================
1. RECURSION — FLATTEN COMPLETELY
==================================================
*/

function flattenRecursive(arr) {
  const res = [];

  function process(currArr) {
    for (let i = 0; i < currArr.length; i++) {
      if (Array.isArray(currArr[i])) {
        process(currArr[i]);
      } else {
        res.push(currArr[i]);
      }
    }
  }

  process(arr);
  return res;
}

// Time: O(N) — every element is visited once.
// Total Space: O(N) — result uses O(N) space and recursion stack
// uses O(D) space. O(N + D) simplifies to O(N).
// N = total number of elements.
// D = maximum nesting depth.

/*
==================================================
2. STACK — FLATTEN COMPLETELY
==================================================
*/

function flattenStack(value) {
  const stack = [];

  for (let i = value.length - 1; i >= 0; i--) {
    stack.push(value[i]);
  }

  const res = [];

  while (stack.length) {
    const current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push(current[i]);
      }
    } else {
      res.push(current);
    }
  }

  return res;
}

// Time: O(N) — every element is processed once.
// Total Space: O(N) — stack and result can each use O(N) space.
// N = total number of elements.

/*
==================================================
3. RECURSION — FLATTEN TO DEPTH n
==================================================
*/

function flatDepthRecursive(arr, n = 1) {
  const res = [];

  function process(currArr, currN) {
    for (let i = 0; i < currArr.length; i++) {
      if (Array.isArray(currArr[i]) && currN > 0) {
        process(currArr[i], currN - 1);
      } else {
        res.push(currArr[i]);
      }
    }
  }

  process(arr, n);
  return res;
}

// Time: O(N) — every visited element is processed once.
// Total Space: O(N) in the worst case.
// Result uses O(M) space; recursion stack uses O(min(D, n) + 1)
// for finite, nonnegative integer n.
// N = visited elements; M = output elements; D = maximum nesting depth.

/*
==================================================
4. STACK — FLATTEN TO DEPTH n
==================================================
*/

function flatDepthStack(value, n = 1) {
  const stack = [];

  for (let i = value.length - 1; i >= 0; i--) {
    stack.push([value[i], n]);
  }

  const res = [];

  while (stack.length) {
    const [current, depth] = stack.pop();

    if (Array.isArray(current) && depth > 0) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push([current[i], depth - 1]);
      }
    } else {
      res.push(current);
    }
  }

  return res;
}

// Time: O(N) — every visited element is processed once.
// Total Space: O(N) in the worst case — stack and result can
// each use O(N) space.
// N = total number of elements visited during flattening.

/*
==================================================
TEST CASES
==================================================
*/

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

console.log("1. Recursive, complete:", flattenRecursive(arr));

console.log("2. Stack, complete:", flattenStack(arr));

console.log("3. Recursive, depth 1:", flatDepthRecursive(arr, 1));

console.log("4. Stack, depth 1:", flatDepthStack(arr, 1));
