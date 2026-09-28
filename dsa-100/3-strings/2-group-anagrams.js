/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
----------

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
----------

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [[""]]

Example 3:
----------

Input: strs = ["a"]
Output: [["a"]]

Constraints:
------------

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/*

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join();

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return [...map.values()];
}

*/

function groupAnagrams(strs) {
  const map = new Map();

  for (let word of strs) {
    const freq = new Array(26).fill(0);

    for (let char of word) {
      freq[char.charCodeAt(0) - 97]++;
    }
    console.log(freq);
    const key = freq.join("#");
    console.log(key);

    if (!map.has(key)) {
      map.set(key, []);
    }
    console.log(map);
    map.get(key).push(word);
    console.log(map);
  }
  return [...map.values()];
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs = ["a"];

console.log(groupAnagrams(strs));

/*

Solution	  Time	          Space
Sorting	    O(n × k log k)	O(n × k)
Frequency   array	O(n × k)	O(n × k)

*/
