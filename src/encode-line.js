const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

    if (str.length == 0) {
        return ''
    }
    let out = '';
    let i = 0;
    while (i < str.length) {
        let count = 1;
        let letter = str[i];
        while ((letter === str[i + 1])) {
            i++;
            count++;
        }
        i++;
        out += (count == 1 ? '' : count) + letter
    }
    return out
}

module.exports = {
    encodeLine
};