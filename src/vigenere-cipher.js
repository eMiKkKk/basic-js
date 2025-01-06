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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const messageChar = messageUpper[i];
      if (messageChar >= 'A' && messageChar <= 'Z') {
        const messageCharCode = messageChar.charCodeAt(0) - 65;
        const keyCharCode = keyUpper[keyIndex % keyUpper.length].charCodeAt(0) - 65;
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
        result += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessageUpper.length; i++) {
      const encryptedMessageChar = encryptedMessageUpper[i];
      if (encryptedMessageChar >= 'A' && encryptedMessageChar <= 'Z') {
        const encryptedMessageCharCode = encryptedMessageChar.charCodeAt(0) - 65;
        const keyCharCode = keyUpper[keyIndex % keyUpper.length].charCodeAt(0) - 65;
        const decryptedCharCode = (encryptedMessageCharCode - keyCharCode + 26) % 26 + 65;
        result += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        result += encryptedMessageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
