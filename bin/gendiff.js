#!/usr/bin/env node
import { program } from 'commander'
import genDiff from '../src/index.js'

if (import.meta.url === `file://${process.argv[1]}`) {
  program
    .version('0.0.1')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format (default: "stylish")', 'stylish')
    .action((path1, path2) => {
      console.log(genDiff(path1, path2, program.opts().format))
    })
    .parse(process.argv)
}
