import {options} from './commands.js';
import * as fs from 'fs';

function getCommand(input) {
  if (input && input[0]) {
    return input[0];
  }
  return null;
}

function generateError(err) {
  if (err) {
    process.stderr.write(err.message + '\n');
    process.exit(1);
  }
}

function validateCommands() {
  let inputFile = getCommand(options.input);
  let outputFile = getCommand(options.output);

  if (!getCommand(options.action)) {
    generateError(new Error('Error: -a or --action is required!'));
  }
  if (
    getCommand(options.action) !== 'encode' &&
    getCommand(options.action) !== 'decode'
  ) {
    generateError(new Error('Error: action must be encode or decode!'));
  }



  if (!getCommand(options.shift)) {
    generateError(new Error('Error: -s or --shift is required!'));
  }
  if (!Number(options.shift)) {
    generateError(new Error('Error: -s or --shift must be integer'));
  }
  


  if (!fs.existsSync(inputFile) && !!inputFile) {
    generateError(new Error(`Error: "${inputFile}" is a wrong path to file`));
  }
  if (!fs.existsSync(outputFile) && !!outputFile) {
    generateError(new Error(`Error: "${outputFile}" is a wrong path to file`));
  }

  // check files

  if (inputFile) {
    fs.access(inputFile, fs.constants.R_OK, (err) =>
      generateError(
        err ? new Error(`error: ${inputFile} is not readable`) : err
      )
    );
  }
  if (outputFile) {
    fs.access(outputFile, fs.constants.R_OK, (err) =>
      generateError(
        err ? new Error(`error: ${outputFile} is not readable`) : err
      )
    );
  }
}

export {getCommand, validateCommands};
