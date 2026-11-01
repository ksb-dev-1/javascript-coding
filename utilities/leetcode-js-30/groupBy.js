Array.prototype.groupBy = function (fn) {
  const obj = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (!Object.hasOwn(obj, key)) {
      obj[key] = [];
      console.log(obj);
    }
    obj[key].push(this[i]);
    console.log(obj);
  }
  return obj;
};

const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn = function (item) {
  return item.id;
};

// const array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9],
// ];
// const fn = function (list) {
//   return String(list[0]);
// };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fn = function (n) {
//   return String(n > 5);
// };

console.log(array.groupBy(fn));
