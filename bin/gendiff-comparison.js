import lodash from 'lodash'

const { sortBy } = lodash
export default function (file1, file2) {
  const allKeys = [...Object.keys(file1), ...Object.keys(file2)]
  const sortedUniqueKeys = sortBy([...new Set(allKeys)])
  const comparison = (keys) => {
    const iter = (keys, acc) => {
      if (keys.length === 0) return acc
      const [currentKey, ...restKeys] = keys
      if ((currentKey in file1) && !(currentKey in file2)) {
        return iter(restKeys, [...acc, `  - ${currentKey}: ${file1[currentKey]}`])
      }
      else if (!(currentKey in file1) && (currentKey in file2)) {
        return iter(restKeys, [...acc, `  + ${currentKey}: ${file2[currentKey]}`])
      }
      else if ((currentKey in file1) && (currentKey in file2) && file1[currentKey] === file2[currentKey]) {
        return iter(restKeys, [...acc, `    ${currentKey}: ${file1[currentKey]}`])
      }
      else if ((currentKey in file1) && (currentKey in file2) && file1[currentKey] !== file2[currentKey]) {
        return iter(restKeys, [...acc,
          `  - ${currentKey}: ${file1[currentKey]}`,
          `  + ${currentKey}: ${file2[currentKey]}`,
        ])
      }
    }
    return iter(keys, [])
  }
  const filteredKeys = comparison(sortedUniqueKeys)
  return `{\n${filteredKeys.join('\n')}\n}`
}
