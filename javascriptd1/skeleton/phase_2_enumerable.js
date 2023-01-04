Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

function myFunction(num) {
    return num += 1;
};

console.log([1, 4, 5, 6, 3].myEach(myFunction));

Array.prototype.myMap = function (callback) {
    emptyList = []

    this.myEach(function(element) { 
        emptyList.push(callback(element));
    })

    return emptyList
}   //comment 
console.log([1, 4, 5, 6, 3].myMap(myFunction));

