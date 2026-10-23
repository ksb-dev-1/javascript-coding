Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

// const nums = [null, {}, 3];
const nums = [];

console.log(nums.last());
