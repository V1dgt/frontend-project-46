#!/usr/bin/env node
import { program } from 'commander'
import { cwd } from 'node:process'
import { resolve } from 'node:path'
import parseJson from './gendiff-parse.js'
import comparison from './gendiff-comparison.js'

program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format (default: "stylish")')

  .action((filepath1, filepath2) => {
    const convertPath = value => value.startsWith('/') ? value : resolve(cwd(), value)
    const path1 = convertPath(filepath1)
    const path2 = convertPath(filepath2)
    const file1 = parseJson(path1)
    const file2 = parseJson(path2)
    comparison(file1, file2)
  })
program.parse()
