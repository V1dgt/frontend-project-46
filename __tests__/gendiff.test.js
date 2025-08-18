import { fileURLToPath } from 'node:url'
import path, { dirname } from 'node:path'
import { gendiff } from '../bin/gendiff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('gendiff', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`)
})
