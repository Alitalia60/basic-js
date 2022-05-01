const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    let wrongSymbols = 0;
    if (n.split('-').length != 6) return false;
    n.split('-').forEach(element => {
        for (let index = 0; index < element.length; index++) {
            let letter = element[index]
            if ((letter >= '0') && (letter <= '9') || (letter > 'A') && (letter <= 'F')) {} else {
                wrongSymbols++
            }
        }
    });
    return wrongSymbols == 0
}
module.exports = {
    isMAC48Address
};