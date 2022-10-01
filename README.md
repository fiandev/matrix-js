# Matrix js

![version](https://img.shields.io/npm/v/matrix-nodejs?label=matrix-nodejs)

![size](https://img.shields.io/bundlephobia/min/matrix-nodejs?label=size)

### light module to create, count, operate and manipulate matrix array 2D or 3D

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

/* generate matrix from I-J-K */
// example 2i - j + 3k
let c = matrix.generate({
  i: 2,
  j: -1,
  k: 3
})
```

## example require

```javascript
const { Matrix, matrix } = require("matrix-nodejs")

// initialize object
let mtx = new Matrix // class from module

let a = matrix.generate() // use from matrix object in module
let b = mtx.generate() // use from mtx object
```

## example usage
### addition matrix

```javascript
const { matrix } = require("matrix-nodejs")

const result = matrix.addition(a, b) // return array matrix

console.log(result) // result matrix a + b
```

# list properties

- addition (matrix a + matrix b)
- subtraction (matrix a - matrix b)
- det2D (determinant matrix 2D)
- det3D (determinant matrix 3D)
- generate (generate matrix)
- dot (matrix a . matrix b)
- multiple (matrix a * matrix b)
- length (count total length of matrix)
- angle (find angle of two vector)
- rows (count total rows of matrix)
- invers (return invers matrix)
- transpost (return transpost matrix)
- size (return dimension of matrix)

> built with ❤️ by Fiandev