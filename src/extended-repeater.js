const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (typeof str != "string") {
        str = String(str);
      }
      if (typeof str != "string") str = String(str);
    
      let repeatTimes = options.hasOwnProperty("repeatTimes")
        ? options.repeatTimes
        : 1;
    
      let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
        ? options.additionRepeatTimes
        : 1;
    
      let addition = options.hasOwnProperty("addition") ? options.addition : "";
      if (typeof addition != "string") {
        addition = String(addition);
      }
    
      let separator = options.hasOwnProperty('separator') ? options.separator : "+";
    
      let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : "|";
    
      let addStr = "";
    
      for (let i = 1; i <= additionRepeatTimes; i++) {
        addStr += addition + (additionRepeatTimes == i ? "" : additionSeparator);
      }
      let outStr = "";
      for (let i = 1; i <= repeatTimes; i++) {
        outStr += str + addStr + (repeatTimes == i ? "" : separator);
      }
        return outStr
}

module.exports = {
    repeater
};