Array.prototype.uniq = function () {
  returnList = [];
  for (let i = 0; i < this.length; i++) {
    if (!returnList.includes(this[i])) {
      returnList.push(this[i]);
    }
  }
  return returnList;
};