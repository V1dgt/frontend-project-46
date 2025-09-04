import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import parseData from './parsers.js'
import buildDiff from './compare.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const gendiff = (filepath1, filepath2) => {
  const convertPath = (value) => {
    if (value.startsWith('/')) return value
    return resolve(__dirname, '..', value)
  }
  const path1 = convertPath(filepath1)
  const path2 = convertPath(filepath2)
  const file1 = parseData(path1)
  const file2 = parseData(path2)
  return buildDiff(file1, file2)
}

export default gendiff
