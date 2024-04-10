/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    if (arr.length === 0) {
        return null;
    }
    if (cb === undefined) {
        let result = arr.reduce(function(smallest, ele){
            if (ele < smallest) {
                return ele;
            } else {
                return smallest;
            }
        }, arr[0]);
        return result;
    } else {
        let result = arr.reduce(function(smallest, ele){
            if (cb(ele) < smallest) {
                return cb(ele);
            } else {
                return smallest;
            }
        }, cb(arr[0]));
        return result;
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
