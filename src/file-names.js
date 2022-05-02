const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let i = 0;
  let temp = [];
  const arrOut = names.map(function (el) {
    if (i == 0) {
      temp.push(el)
      i++;
      return el;
    }
    let k = Math.max(temp.filter((elem) => elem === el).length, names.slice(0,i).filter((elem) => elem === el).length) ;
    let newElem = el + (k === 0 ? "" : "(" + k + ")");
    i++;
    temp.push(newElem)
    return newElem;
  });
  return arrOut
}

module.exports = {
  renameFiles
};
