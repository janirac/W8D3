Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        emptyList.push(callback(this[i]));
    }
    return this
};

function myFunction(num) {
    return num += 1;
};
// console.log(typeof myEach)
// console.log([1, 4, 5, 6, 3].myEach(myFunction));
// console.log("Hello")

Array.prototype.myMap = function (callback) {
    emptyList = []

    this.myEach(function(element) {
        emptyList.push(callback(element));
    })

    return emptyList
}   //comment 