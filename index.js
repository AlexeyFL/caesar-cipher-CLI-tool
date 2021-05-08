import streamTransform from './streamTransform.js';
import {options} from './commands.js';
import {validateCommands, getCommand} from './checkCommandLine.js';



validateCommands();
streamTransform(getCommand(options.input), getCommand(options.output));