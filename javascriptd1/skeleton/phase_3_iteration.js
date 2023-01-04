Array.prototype.bubbleSort = function () {
  let sorted = true;

  while (sorted) {
    sorted = false;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = true;
      }
    }
  }
  return this;
};

console.log([2, 6, 1, 8, 21, 6, 2].bubbleSort());
