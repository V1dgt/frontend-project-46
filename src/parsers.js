import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'

export default function (path) {
  const file = readFileSync(path, 'utf-8')
  let data
  const splitPath = path.split('.')
  const extension = splitPath[splitPath.length - 1]
  if (extension === 'json') {
    data = JSON.parse(file)
  }
  else {
    data = yaml.load(file)
  }
  return data
}
