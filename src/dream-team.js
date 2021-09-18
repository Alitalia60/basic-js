import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let FirstLetters = []; //массив первых букв имен
  if (members == undefined) return false; // argument udefined
  if (typeof members != "object") return false; //not an object
  if (members instanceof Array != true) return false;
  if (members.constructor.toString().indexOf("Array") == -1) return false; // not an array

  //итерация офильтрованного массива имен
  members.filter(checkElement).forEach(function (element) {
    if (typeof element == "string") {
      FirstLetters.push(element.trim()[0].toUpperCase()); //удаление пробелов, певый символ в имени в верхнем регистре
    }
  });

  console.log(FirstLetters.sort().join(""));
  return FirstLetters.sort().join("");
}

//контроль корректности имени в  массиве
function checkElement(el) {
  const CORRECT_LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (typeof el != "string") return false;
  if (CORRECT_LETTERS.indexOf(el[0].toUpperCase()) == -1) return false;
  return true;
}
