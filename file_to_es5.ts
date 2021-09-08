import { parse } from '@babel/parser'
import * as babel from '@babel/core'
import * as fs from 'fs'

const code = fs.readFileSync('./test.js').toString()

// const code = `let a = 'let';let b = 2;const c = 3`

const ast = parse(code, { sourceType: 'module' })
const result = babel.transformFromAstSync(ast, code, { presets: ['@babel/preset-env'] })
console.log(result.code);
fs.writeFileSync('./test_es5.js', result.code)