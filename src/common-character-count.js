const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let sum = 0;
    const setArray = new Set();
    for (let i = 0; i < s1.length; i++) {

        let letter = s1[i];
        if (!setArray.has(letter)) {
            setArray.add(letter);

            let sum1 = 1;
            let sum2 = 0;
            for (let j = i + 1; j < s1.length; j++) {
                sum1 += letter === s1[j] ? 1 : 0;
            }
            for (let k = 0; k < s2.length; k++) {
                sum2 += letter === s2[k] ? 1 : 0;
            }
            sum += Math.min(sum1, sum2);
        }
    }
    return sum;
}

module.exports = {
    getCommonCharacterCount
};