function shipWithinDays(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((sum, w) => sum + w, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let daysNeeded = 1;
    let currentLoad = 0;

    for (const weight of weights) {
      if (currentLoad + weight > mid) {
        daysNeeded++;
        currentLoad = weight;
      } else {
        currentLoad += weight;
      }
    }

    if (daysNeeded <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;

// const weights = [3, 2, 2, 4, 1, 4];
// const days = 3;

// const weights = [1, 2, 3, 1, 1];
// const days = 4;

console.log(shipWithinDays(weights, days));
