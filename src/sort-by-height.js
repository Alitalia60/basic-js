const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

    const sorted = arr.filter(element => element != -1);
    sorted.sort((a, b) => a - b);
    // console.log(sorted);
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] == -1 ? arr[i] : sorted.shift()
    };
    return arr
}

module.exports = {
    sortByHeight
};