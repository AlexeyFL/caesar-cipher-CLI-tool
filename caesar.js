import {alphabet} from './data.js';

export default class Caesar {
  str = '';

  shifted = 0;

  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  cipher(shift, action, sentences) {
    if (action !== 'encode') {
      shift *= -1;
    }
    this.str = sentences.split('').map((item) => {
      if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
        const index = this.alphabet.upper.indexOf(item);
        if (index >= 0) {
          this.shifted = (index + shift) % this.alphabet.upper.length;
          if (this.shifted < 0) {
            this.shifted += this.alphabet.upper.length;
          }

          return String.fromCharCode(
            this.alphabet.upper[this.shifted].charCodeAt()
          );
        }
      }

      if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
        const index = this.alphabet.lower.indexOf(item);
        if (index >= 0) {
          this.shifted = (index + shift) % this.alphabet.lower.length;
          if (this.shifted < 0) {
            this.shifted += this.alphabet.lower.length;
          }

          return String.fromCharCode(
            this.alphabet.lower[this.shifted].charCodeAt()
          );
        }
      }

      return item;
    });
    return this.str.join('');
  }
}

const caesar = new Caesar(alphabet);

console.log(
  caesar.cipher(-7, 'encode', 'This is secret. Message about "_" symbol!')
);
