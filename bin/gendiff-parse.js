import {readFileSync } from 'node:fs'

export default function(path) {
    const file = readFileSync(path, 'utf-8')
    const obj = JSON.parse(file)
    return obj
}