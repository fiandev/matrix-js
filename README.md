# Matrix js

![version](https://img.shields.io/npm/v/matrix-nodejs?label=matrix-nodejs)

![size](https://img.shields.io/bundlephobia/min/matrix-nodejs?label=size)

### light module to create, count, operate, and manipulate. matrix 2D, matrix 3D and vector

# installation
## clone this project

```shell
git clone https://github.com/fiandev/matrix-js
```

## install dependencies

```shell
# using npm
npm install matrix-nodejs --save
```

# how to usage

## basic rules
```javascript
// must require with dustructuring object
// import object matrix
const { matrix } = require("matrix-nodejs")
// import class Matrix
const { Matrix } = require("matrix-nodejs")
// or import object matrix & class Matrix
const { matrix, Matrix } = require("matrix-nodejs")

// example
let A = [
   [1, 2],
   [3, 4]
  ]
let B = [
   [5, 6],
   [7, 8]
  ]
// example initialize matrix
const A = new Matrix(a)
A.addition(a, b) // incorrect
A.addition(b) // correct

// example without initialize matrix
matrix.addition(a) // incorrect
matrix.addition(a, b) // correct

```
## declare matrix

```javascript
const { matrix } = require("matrix-nodejs")

/* matrix a (2D) */
let a = [
    [1, 2],
    [3, 4]
  ]
  
/* matrix b (3D) */
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
// initialize matrix A from array a
let A = new Matrix(a)
```

## example usage
### basic usage

```javascript
const { 
  matrix, // object 
  Matrix // class
} 
= require("matrix-nodejs")

// create array matrix
const a = [
    [1, 2],
    [3, 4]
  ]
const b = [
    [5, 6],
    [7, 8]
  ]
const c = [
    [9, 0],
    [1, 2]
  ]
  
const result = matrix.addition(a, b) // return array matrix a + b

// initialize matrix from array
const C = new Matrix(c)

// just call method without passing matrix in argument function
console.log(C.size())

// passing matrix to addition with matrix initialized
console.log(C.addition(a)) // matrix c + matrix a
console.log(result) // result matrix a + b
```

### multiple matrix
```javascript
const { matrix } = require("matrix-nodejs")
const a = [
    [1, 2],
    [3, 4]
  ]
const b = [
    [5, 6],
    [7, 8]
  ]
const c = [
    [9, 0],
    [1, 2]
  ]

const AxB = matrix.multiple(a, b) // return array matrix
const multiple = matrix.multipleX(1/2, a) // return array matrix

// initialize matrix C from array c
const C = new Matrix(c)

C.multipleX(1/2) // return c * 1/2
C.multiple(b) // return c * 1/2

console.log(AxB) // result matrix a + b
console.log(multiple) // result 1/2 * matrix a
```

## vector
### cross vector
```javascript
const { vector } = require("matrix-nodejs")

/* generate arrat vector from I-J-K */
// example i + 2j + 3k
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
```

# list properties

### matrix
- addition (matrix a + matrix b)
- subtraction (matrix a - matrix b)
- det2D (determinant matrix 2D)
- det3D (determinant matrix 3D)
- dot (matrix a . matrix b)
- multiple (matrix a * matrix b)
- multipleX (any * a matrix)
- length (count total length of matrix)
- rows (count total rows of matrix)
- invers (return invers matrix)
- transpost (return transpost matrix)
- size (return dimension of matrix)

### vector
- generate (generate array vector)
- destruct (destruct array vector from string)
- cross (multiple cross two vector)
- angle (find angle of two vector)

> built with ❤️ by Fiandev