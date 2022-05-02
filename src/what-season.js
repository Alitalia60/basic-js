const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    const seasons = ["winter", "spring", "summer", "autumn"];
    const errorUnableDeterminate = "Unable to determine the time of year!";
    const errorInvalidDate = "Invalid date!";
    if (!date) {
        return errorUnableDeterminate;
    }
    if (typeof date != "object") {
        throw new Error(errorInvalidDate);
    }
    if (Object.keys(date).length > 0) {
        throw new Error(errorInvalidDate);
    }

    if ([0, 1, 11].indexOf(date.getMonth()) != -1) {
        return seasons[0];
    } else if (date.getMonth() <= 4) {
        return seasons[1];
    } else if (date.getMonth() <= 7) {
        return seasons[2];
    } else if (date.getMonth() <= 10) {
        return seasons[3];
    }
}


module.exports = {
    getSeason
};