const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function dateSample(sampleActivity) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let k = 0.693 / HALF_LIFE_PERIOD;
    const CORRECT_SYMBOLS = "0123456789.";

    if (sampleActivity == undefined) return false;
    if (sampleActivity == Infinity) return false;
    if (typeof sampleActivity != "string") return false; // not a string
    if ((typeof Number(sampleActivity) != 'number') || (String(Number(sampleActivity)) != sampleActivity)) {
        return false
    }
    let numSampleActivity = Number(sampleActivity);
    if (numSampleActivity > MODERN_ACTIVITY || numSampleActivity <= 0) { return false };

    return Math.ceil(Math.log(MODERN_ACTIVITY / numSampleActivity) / k);

}

module.exports = {
    countCats
};