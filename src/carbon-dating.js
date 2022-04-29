import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
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