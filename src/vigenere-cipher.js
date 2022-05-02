const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const alphabet = "";

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error("Incorrect arguments!");
        }
        let shiftsArray = key.split('').map((el) => alphabet.indexOf(el.toUpperCase()));
        const arrayIndexOfMessage = message.split('').map((el) => alphabet.indexOf(el.toUpperCase()));
        let outText = "";
        let keyIndex = 0;
        for (let index = 0; index < arrayIndexOfMessage.length; index++) {
            const element = arrayIndexOfMessage[index];
            if (alphabet.indexOf(message[index].toUpperCase()) == -1) {
                outText += message[index]
            } else {
                if (keyIndex > key.length - 1) {
                    keyIndex = keyIndex - Math.trunc(keyIndex / key.length) * key.length;
                }
                outText += getNewLetter(arrayIndexOfMessage[index], shiftsArray[keyIndex]);
                keyIndex++;
            }
        }
        return outText;
    }

    decrypt(message, key) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        // if (!message || !key) {
        //   throw new Error("Incorrect arguments!");
        // }
        // let shiftsArray = key.split('').map((el) => alphabet.indexOf(el.toUpperCase()));
        // const arrayIndexOfMessage = message.split('').map((el) => alphabet.indexOf(el.toUpperCase()));
        // let outText = "";
        // let keyIndex = 0;
        // for (let index = 0; index < arrayIndexOfMessage.length; index++) {
        //   const element = arrayIndexOfMessage[index];
        //   if (alphabet.indexOf(message[index].toUpperCase()) == -1) {
        //     outText += message[index]
        //   } else {
        //     if (keyIndex > key.length - 1) {
        //       keyIndex = keyIndex - Math.trunc(keyIndex / key.length) * key.length;
        //     }
        //     outText += getNewLetter(arrayIndexOfMessage[index], shiftsArray[keyIndex], false);
        //     keyIndex++;
        //   }
        // }
        // return outText;
    }
}

function getNewLetter(letterIndex, shift, direct = true) {
    let shiftedIndex = letterIndex + (direct ? shift : -shift);

    if (shiftedIndex > alphabet.length - 1) {
        shiftedIndex = shiftedIndex - Math.trunc(shiftedIndex / alphabet.length) * alphabet.length;
    }
    return alphabet[shiftedIndex]
}

module.exports = {
    VigenereCipheringMachine
};