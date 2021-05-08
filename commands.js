import {Command} from 'commander';

const program = new Command();

program
  .option('-a, --action [actions...]', 'actions')
  .option('-s, --shift <value>', 'shift')
  .option('-i, --input [input...]', 'input file')
  .option('-o, --output [output...]', 'output file');

const options = program.opts();

program.parse(process.argv);

export {options};
