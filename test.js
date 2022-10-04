/*
try {
  const matrix = require("./index")
  console.log(`test passed!`)
} catch (err) {
  throw err
}
*/

const { Matrix, matrix } = require("./index")

let a = matrix.generate({
  i: 1
})
  
let b = matrix.generate({
  i: 1,
  j: 1
})

let c = [
    [2, 0, 3],
    [-1, 5, 2],
    [4, 8, 6]
  ]
  
console.log( matrix.multiple(c, c) )