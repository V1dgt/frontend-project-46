import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'

export default function (path) {
  const file = readFileSync(path, 'utf-8')
  const splitPath = path.split('.')
  const extension = splitPath[splitPath.length - 1]

  switch (extension) {
    case 'json':
      return JSON.parse(file)
    case 'yaml':
      return yaml.load(file)
    case 'yml':
      return yaml.load(file)
    default:
      throw new Error('Выбранные файлы имеют расширения, которые не поддерживается. Принимаются файлы в формате json или yaml:)')
  }
}
