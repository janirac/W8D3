Array.prototype.uniq = function () {
  returnList = [];
  for (let i = 0; i < this.length; i++) {
    if (!returnList.includes(this[i])) {
      returnList.push(this[i]);
    }
  }
  return returnList;
};

// console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twoSum = function () {
  sums = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sums.push([i, j]);
      }
    }
  }
  return sums;
};

// console.log([1, -1, 2, 3, 3, -3].twoSum());

Array.prototype.transpose = function () {
  returnList = Array.from(Array(this.length), () => []);
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      returnList[j].push(this[i][j]);
    }
  }
  return returnList;
};

// console.log(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ].transpose()
// );
