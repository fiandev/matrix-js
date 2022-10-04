/*
try {
  console.log(`test passed!`)
} catch (err) {
  throw err
}
*/
const { Matrix, matrix, vector } = require("./index")


let a = vector.generate({
  i: 1,
  j: 2,
  k: 3
})

// example string vector (strict space)
let b = vector.destruct("- 2j + 3i - k") // return array

let AxB = vector.cross(a, b) // return object
let angle = vector.angle(a, b) // return number

console.log(AxB.string) // - 11i - 5j + 7k
console.log(AxB.matrix) // [ [-11], [-5], [7] ]
console.log(angle) // 86 degree
