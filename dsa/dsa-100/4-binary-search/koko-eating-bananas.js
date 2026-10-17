/*

🟡 875. Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
----------

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
----------

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
----------

Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
------------

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

*/

/*

function minEatingSpeed(piles, h) {
  const maxPile = Math.max(...piles);

  // Try every possible speed, from slowest to fastest.
  for (let k = 1; k <= maxPile; k++) {
    let hours = 0;

    // Calculate total hours needed at speed k.
    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }

    // Return the first speed that finishes within h hours.
    if (hours <= h) {
      return k;
    }
  }
}

*/

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const piles = [3, 6, 7, 11];
const h = 8;

// const piles = [30, 11, 23, 4, 20];
// const h = 5;

// const piles = [30, 11, 23, 4, 20];
// const h = 6;

console.log(minEatingSpeed(piles, h));
