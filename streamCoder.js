import {Transform} from 'stream';
import Caesar from './caesar.js';
import {alphabet} from './data.js';
import {getCommand} from './checkCommandLine.js';
import {options} from './commands.js';

const caesar = new Caesar(alphabet);

export default class StreamCoder extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const resultString = `${chunk.toString('utf8')}\n`;
      callback(
        null,
        caesar.cipher(
          +options.shift,
          getCommand(options.action),
          resultString
        )
      );
    } catch (e) {
      callback(e);
    }
  }
}
