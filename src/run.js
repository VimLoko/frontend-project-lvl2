import { Command } from 'commander';
import genDiff from './index.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Usage: gendiff [options]')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

export default (args) => program.parse(args);