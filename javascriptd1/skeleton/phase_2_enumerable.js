Array.prototype.myEach = function (callback) {
    emptyList = []
    for (let i = 0; i < this.length; i++) {
        emptyList.push(callback(this[i]));
    }
    return emptyList
};

function myFunction(num) {
    return num += 1;
};
// console.log(typeof myEach)
console.log([1, 4, 5, 6, 3].myEach(myFunction));
// console.log("Hello")

