/*
try {
  console.log(`test passed!`)
} catch (err) {
  throw err
}
*/
const { Matrix, matrix, vector } = require("./index")


let a = [
   [1, 2],
   [1, 2]
  ]
let b = [
   [1, 2],
   [1, 2]
  ]

console.log(matrix.multiple(a, b))