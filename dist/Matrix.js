class Matrix {
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (array)
   */
  addition (a, b) {
    this.#check(a, b)
    
    let result = []
    let longest = a.length >= b.length ? a : b
    let c = a.length >= b.length ? b : a
    
    longest.forEach((row, i) => {
      let col = []
      row.forEach((item, j) => {
        let value = item + (c[i] ? c[i][j] : 0)
        col.push(value)
      })
      
      result.push(col)
    })
    return result
  }
  
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (array)
   */
  subtraction (a, b) {
    this.#check(a, b)
    
    let result = []
    let longest = a.length >= b.length ? a : b
    let c = a.length >= b.length ? b : a
    
    longest.forEach((row, i) => {
      let col = []
      row.forEach((item, j) => {
        let value = item - (c[i] ? c[i][j] : 0)
        col.push(value)
      })
      
      result.push(col)
    })
    return result
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  det2D (a) {
    this.#check(a, b)
    this.Matrix(a, b, 2)
    
    let result = []
    a.forEach((row, i) => {
      let d = 0
      let b = a[i + 1] ? a[i + 1] : a[i - 1]
      row.forEach((item, j) => {
        d += !isNaN(item * (b[j + 1])) ? item * (b[j + 1]) : 0
      })
      result.push(d)
    })
    
    return result.reduce((value, curr) => value - curr)
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  det3D (a) {
    this.#check(a, b)
    this.Matrix(a, b, 3)
    
    let shadow = []
    a.forEach((row, i) => {
      row.forEach((item, j) => {
        if (j <= 1) shadow.push(item)
      })
    })
    
    let c = 0
    
    // insert shadow
    shadow.forEach((item, i) => {
      if (i > 0 && i % 2 === 0) c++
      a[c].push(item)
    })
    
    // right to bottom
    let rb = (a[0][0] * a[1][1] * a[2][2] + a[0][1] * a[1][2] * a[2][3] + a[0][2] * a[1][3] * a[2][4])
    
    // top to left
    let tl = (a[0][2] * a[1][1] * a[2][0] + a[0][3] * a[1][2] * a[2][1] + a[0][4] * a[1][3] * a[2][2])
    
    return rb - tl
  }
  
  /*
   * @param (object) destructuring i, j, k
   * @return (array) matrix
   */
  generate ({i, j, k}) {
    return [
        [i ? i : 0],
        [j ? j : 0],
        [k ? k : 0]
      ]
  }
  
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (number)
   */
  dot (a, b) {
    let result = 0
    a.forEach((row, i) => {
      row.forEach((item, j) => {
        result += item * b[i][j]
      })
    })
    
    return result
  }
  
  /*
   * @param a (array) matrix
   * @return (number) total rows matrix
   */
  rows (a) {
    let result = 0
    a.forEach((row, i) => {
      row.forEach((item, j) => {
        result += item**2
      })
    })
    
    return Math.sqrt(result)
  }
  
  /* exception */
  /*
   * @param message (Error)
   * @param reference (string)
   */
  error(message, reference) {
    throw new Error(message, reference)
  }
  
  /*
   * @param a (any)
   * @param b (any)
   */
  #check (a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") this.error("need parameter at least 2")
  }
  
  /*
   * @param a (any)
   * @param b (any)
   * @param c (number)
   */
  #matrixType (a, b, c) {
    if (a.length === c && b.length === c) this.error("matrix a and b must have same total rows")
    if (a.length !== c || b.length !== c) this.error(`matrix a and b must have ${ c } rows, ${ a.length !== 2 ? a.length : b.length } given`)
  }
}

module.exports = {
  Matrix
}