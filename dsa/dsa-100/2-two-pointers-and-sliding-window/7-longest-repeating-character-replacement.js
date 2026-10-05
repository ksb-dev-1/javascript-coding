/*

🟡 424. You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
----------

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
----------

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".

The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:
------------

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

*/

/*

function characterReplacement(s, k) {
  const map = new Map();
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    maxCount = Math.max(maxCount, map.get(s[right]));

    const windowSize = right - left + 1;

    if (windowSize - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    maxLength = Math.max(maxLength, windowSize);
  }
  return maxLength;
}

*/

function characterReplacement(s, k) {
  const count = new Array(26).fill(0);

  let left = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - 65;

    count[index]++;

    maxCount = Math.max(maxCount, count[index]);

    if (right - left + 1 - maxCount > k) {
      const leftIndex = s.charCodeAt(left) - 65;

      count[leftIndex]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// const s = "ABAB";
// const k = 2;

const s = "AABABBA";
const k = 1;

console.log(characterReplacement(s, k));
