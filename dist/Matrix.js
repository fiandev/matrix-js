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
   * @param b (array) matrix
   * @return (array)
   */
  multiple (a, b) {
    this.#check(a, b)
    let result = []
    
    /* item counter */
    let ic = 0
    /* row counter */
    let rc = 0
    
    a.forEach((row, i) => {
      let section = 0
      result.push([])
      row.forEach((item, j) => {
        section += item * b[rc][ic]
        result[i].push(section)
        
        section = 0
        if(rc < a.length - 1) rc++
      })
      
      if (ic < row.length - 1) ic++
    })
    
    return result
  }
  
  /*
   * @param any (number, float) matrix
   * @param m (array) matrix
   * @return (array)
   */
  multipleX (any, m) {
    if ( !Array.isArray(m) ) this.error(`parameter must be Array '${ typeof m }' given`)
    if (m.length !== 2) this.error(`Matrix must 2D, but ${ m.length }D given`)
    if (typeof any !== "number") this.error(`arguments 2 must be number, ${ typeof any } given`)
    
    let result = []
    m.forEach((row) => {
      let section = []
      row.forEach((item) => {
        section.push(item * any)
      })
      
      result.push(section)
    })
    
    return result
  }
  /*
   * @param a (array) matrix
   * @return (array)
   */
  det2D (a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length !== 2) this.error(`Matrix must 2D, but ${ a.length }D given`)
    
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
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length !== 3) this.error(`Matrix must 3D, but ${ a.length }D given`)
    
    let shadow = []
    a.forEach((row, i) => {
      row.forEach((item, j) => {
        if (j <= 1) shadow.push(item)
      })
    })
    
    // counter
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
  generate ({i = 0, j = 0, k = 0}) {
    return [
        [i],
        [j],
        [k]
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
   * @return (number)
   */
  length (a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length !== 3) this.error(`Matrix must 3D, but ${ a.length }D given`)
    
    let result = 0
    a.forEach((row, i) => {
      row.forEach((item, j) => {
        result += item**2
      })
    })
    
    return Math.sqrt(result)
  }
  
  /*
   * @param a (array)
   * @return (number)
   */
  rows (a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    
    return a.length
  }
  
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (number) degree
   */
  angle (a, b) {
    this.#matrixType(a, b, 3)
    
    let result = this.dot(a, b) / (this.length(a) * this.length(b))
    let degree = Math.acos(result) * 180 / Math.PI
    
    return degree.toFixed()
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  invers (a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length !== 2) this.error(`Matrix must 2D, but ${ a.length }D given`)
    
    /* new matrix */
    let b = [
        [a[1][1], 0 - a[0][1]],
        [0 - a[1][0], a[0][0]]
      ]
    
    return this.multipleX(1 / this.det2D(a), b)
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  transpost(a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length < 2) this.error(`Matrix row must be at least 2, but ${ a.length } given`)
    
    /* 2D */
    if (a.length === 2) {
      return [ 
        [a[0][0], a[1][0]],
        [a[0][1], a[1][1]]
      ]
    } else {
      let result = []
      let dump = []
      let c = 0
      a.forEach((row, i) => {
        result.push([])
        let section = []
        row.forEach((item, j) => {
          section.push(row[j])
        })
        result[i].push( section[i] )
      })
      
      return result
    }
    
  }
  
  size (a) {
    if ( !Array.isArray(a) ) this.error(`parameter must be Array '${ typeof a }' given`)
    if (a.length < 2 || a.length > 3) this.error("invalid total rows of array matrix")
    
    return [ a.length, a[0].length ]
  }
  /* exception */
  
  /*
   * @param message (Error)
   * @param reference (string)
   */
  error(message, reference) {
    let err = new Error(message, reference)
    throw err.message
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
    this.#check(a, b)
    
    if (a.length !== c && b.length !== c) this.error("matrix a and b must have same total rows")
    if (a.length !== c || b.length !== c) this.error(`matrix a and b must have ${ c } rows, ${ a.length !== 2 ? a.length : b.length } given`)
  }
}

module.exports = Matrix