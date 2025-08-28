import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'

export default function (path) {
  const file = readFileSync(path, 'utf-8')
  let data
  const test = path.split('.')
  const extension = test[test.length - 1]
  if (extension === 'json') {
    data = JSON.parse(file)
  }
  else {
    data = yaml.load(file)
  }
  return data
}
