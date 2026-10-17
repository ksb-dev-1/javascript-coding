/*

🟡 875. Koko Eating Bananas

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
