const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let strN = String(n);
    let max = 0;
    for (let index = 0; index < strN.length; index++) {
        max = Math.max(max, Number(strN.slice(0, index) + strN.slice(index + 1, index.length)))
    }
    console.log(max);
    return max;
}

module.exports = {
    deleteDigit
};