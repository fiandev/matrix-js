# Matrix js

### light module to create, count, operate and manipulate matrix array 2D or 3D

# installation
```shell
npm install matrix-js --save
```

# how to usage

## declare matrix

```javascript
const matrix = require("matrix-js")

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

## list property

- addition (matrix a + matrix b)
- subtraction (matrix a - matrix b)
- det2D (determine matrix 2D)
- det3D (determine matrix 3D)
- generate (generate matrix)
- dot (matrix a . matrix b)
- rows (count total rows of matrix)
- length (count length of vector) (coming soon)
- alpha (find angle of two vector) (coming soon)

## example usage
### addition matrix

```javascript
const matrix = require("matrix-js")

matrix.addition(a, b) // return array matrix
```


> built with ❤️ by Fiandev