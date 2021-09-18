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
  if (typeof sampleActivity != "string") return false; // not a string
  //if (Number(sampleActivity) == NaN) return false;
  let flag = true;
  for (let index = 0; index < sampleActivity.length; index++) {
    if (CORRECT_SYMBOLS.indexOf(sampleActivity[index], 0) == -1) {
      flag = false;
      break;
    }
  }
  if (flag == false) return false;

  if (Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 0)
    return false;

  return Math.round(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
}
