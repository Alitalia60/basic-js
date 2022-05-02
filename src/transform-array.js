const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    // console.log(arr);
    // console.log(typeof arr);
    // console.log(arr instanceof Array);
    if (arr instanceof Array != true) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    };
    if (arr.length == 0) {
        return [];
    };

    const newArr = [...arr];
    for (i = 0; i < arr.length; i++) {
        switch (newArr[i]) {
            case '--double-next':
                if (i < newArr.length - 1) {
                    newArr[i] = newArr[i + 1]
                } else if (i == newArr.length - 1) {
                    newArr.splice(i, 1)
                }
                break;

            case '--discard-next': // changed lenthg
                if (i < newArr.length - 1) {
                    newArr.splice(i, 2);
                    i -= 2;
                } else if (i == newArr.length - 1) {
                    newArr.splice(i, 1)
                }
                break;

            case '--discard-prev': // changed lenthg
                if (i == 0) {
                    newArr.splice(0, 1)
                } else if (i > 0) {
                    newArr.splice(i - 1, 2);
                    i -= 2
                }
                break;

            case '--double-prev':
                if (i > 0) {
                    newArr[i] = newArr[i - 1]
                } else if (i == 0) {
                    newArr.splice(0, 1)

                }
                break;
            default:
                break;
        }
    };
    return newArr
}

module.exports = {
    transform
};