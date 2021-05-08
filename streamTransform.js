import * as fs from 'fs';
import {pipeline} from 'stream';
import StreamCoder from './streamCoder.js';

const streamCoder = new StreamCoder();

export default function streamTransform(inputFile, outputFile) {
  let input;
  if (inputFile) {
    input = fs.createReadStream(inputFile);
  } else {
    input = process.stdin;
  }
  let output;
  if (outputFile) {
    output = fs.createWriteStream(outputFile, {flags: 'a'});
  } else {
    output = process.stdout;
  }
  pipeline(input, streamCoder, output, (err) => {
    if (err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
    }
  });
}
