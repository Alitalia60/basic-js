const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let strN = String(n)
    let sum = 0;
    while (strN.length > 1) {
        sum = 0;
        for (let index = 0; index < strN.length; index++) {
            sum += Number(strN[index])
        }
        strN = String(sum)
    }
    return sum;
}

module.exports = {
    getSumOfDigits
};