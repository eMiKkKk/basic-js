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
  str = String(str);

  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  let additionStr = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionStr += addition;
    if (i < additionRepeatTimes - 1) {
      additionStr += additionSeparator;
    }
  }

  let resultStr = '';
  for (let i = 0; i < repeatTimes; i++) {
    resultStr += str + additionStr;
    if (i < repeatTimes - 1) {
      resultStr += separator;
    }
  }

  return resultStr;
}
module.exports = {
  repeater
};
