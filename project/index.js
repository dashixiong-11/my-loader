import a from './a.js'
import b from './b.js'
import content from './test.md'
import './style.css'
// console.log(content);
console.log(a.getB())
console.log(b.getA())
const div = document.createElement('div')
div.innerHTML = content
document.body.appendChild(div)