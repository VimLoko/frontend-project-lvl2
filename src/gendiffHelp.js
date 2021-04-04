import { Command } from 'commander';
// include commander in git clone of commander repo
const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Usage: gendiff [options]')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format');

export default program;
