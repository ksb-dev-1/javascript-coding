/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
----------

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
----------

Input: s = "rat", t = "car"
Output: false

Constraints:
------------

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

/*

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], (map1.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    map2.set(t[i], (map2.get(t[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    freq1 = map1.get(s[i]);
    freq2 = map2.get(s[i]);

    if (freq1 !== freq2) return false;
  }
  return true;
}

*/

/*

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false;

    map.set(t[i], map.get(t[i]) - 1);

    if (map.get(t[i]) < 0) return false;
  }
  return true;
}

*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sIndex = s.charCodeAt(i) - 97;
    const tIndex = t.charCodeAt(i) - 97;

    freq[sIndex]++;
    freq[tIndex]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) return false;
  }
  return true;
}

// const s = "anagram";
// const t = "nagaram";

const s = "rat";
const t = "car";

console.log(isAnagram(s, t));

/*

NOTE:

Unicode:
    use for...of

    function isAnagram(s, t) {
      if (s.length !== t.length) return false;

      const map = new Map();

      // Count characters from s
      for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
      }

      // Subtract characters from t
      for (const char of t) {
        if (!map.has(char)) return false;

        map.set(char, map.get(char) - 1);

        if (map.get(char) < 0) return false;
      }

      return true;
    }

*/
