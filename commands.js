import {Command} from 'commander';

const program = new Command();

program
  .option('-a, --action [actions...]', 'actions')
  .option('-s, --shift <value>', 'shift')
  .option('-i, --input [input...]', 'input file')
  .option('-o, --output [output...]', 'input file');

const options = program.opts();

program.parse(process.argv);

console.log(typeof options.shift)

export {options};
