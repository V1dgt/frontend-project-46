#!/usr/bin/env node
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { program } from 'commander'
import parseData from './parsers.js'
import comparison from './gendiff-comparison.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function gendiff(filepath1, filepath2) {
  const convertPath = (value) => {
    if (value.startsWith('/')) return value
    return resolve(__dirname, '..', value)
  }
  const path1 = convertPath(filepath1)
  const path2 = convertPath(filepath2)
  const file1 = parseData(path1)
  const file2 = parseData(path2)
  return comparison(file1, file2)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  program
    .description('Compares two configuration files and shows a difference')
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
      const diff = gendiff(filepath1, filepath2)
      console.log(diff)
    })
  program.parse()
}
