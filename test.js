/*
try {
  const { Matrix, matrix, vector } = require("./index")
  console.log(`test passed!`)
} catch (err) {
  throw err
}
*/


let a = vector.generate({
  i: 1,
  j: 2,
  k: 3
})

// example string vector (strict space)
let b = vector.destruct("- 2j + 3i - k") // return array

let AxB = vector.cross(a, b) // return object
console.log(AxB.matrix) // [ -11, -5, 7 ]