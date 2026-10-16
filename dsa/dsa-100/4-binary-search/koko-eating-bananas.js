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

function minEatingSpeed(piles, h) {}
