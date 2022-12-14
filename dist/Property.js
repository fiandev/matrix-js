class Property {
  static matrix = []
  constructor(matrix) {
    this.matrix = matrix
  }
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (array)
   */
  addition (a = this.matrix ? this.matrix : [], b = []) {
    let result = []
    let longest = a.length >= b.length ? a : b
    let c = a.length >= b.length ? b : a
    
    longest.forEach((row, i) => {
      let col = []
      row.forEach((item, j) => {
        let value = !isNaN(item + (c[i] ? c[i][j] : 0)) ? item + (c[i] ? c[i][j] : 0) : 0
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
  subtraction (a = this.matrix ? this.matrix : [], b = []) {
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
  multiple (a = this.matrix ? this.matrix : [], b = []) {
    var aNumRows = a.length, 
        aNumCols = a[0].length,
        bNumRows = b.length, 
        bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    
    return m;
  }
  
  /*
   * @param any (number, float) matrix
   * @param m (array) matrix
   * @return (array)
   */
  multipleX (any = 1, m = this.matrix ? this.matrix : []) {
    if ( !Array.isArray(m) ) throw new Error(`Argument must be Array '${ typeof m }' given`)
    if (typeof any !== "number") throw new Error(`arguments 2 must be number, ${ typeof any } given`)
    
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
  det2D () {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length !== 2) throw new Error(`Matrix must 2D, but ${ a.length }D given`)
    
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
  det3D () {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length !== 3) throw new Error(`Matrix must 3D, but ${ a.length }D given`)
    
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
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (number)
   */
  dot (a = this.matrix ? this.matrix : arguments[0]) {
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
  length () {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length !== 3) throw new Error(`Matrix must 3D, but ${ a.length }D given`)
    
    let result = 0
    a.forEach((row, i) => {
      if (Array.isArray(row)) {
        row.forEach((item, j) => {
          let section = !isNaN(item**2) ? item**2 : 0
          result += section
        })
      }
    })
    
    return Math.sqrt(result)
  }
  
  /*
   * @param a (array)
   * @return (number)
   */
  rows () {
    const a = this.matrix ? this.matrix : arguments[0]
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    
    return a.length
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  invers () {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length !== 2) throw new Error(`Matrix must 2D, but ${ a.length }D given`)
    
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
  transpost() {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length < 2) throw new Error(`Matrix row must be at least 2, but ${ a.length } given`)
    
    /* 2D */
    if (a.length === 2) {
      return [ 
        [a[0][0], a[1][0]],
        [a[0][1], a[1][1]]
      ]
    /* 3D */
    } else {
      /* check column */
      for (let row of a) {
        if (row.length !== 3) throw new Error(`invalid matrix column`)
      }
      
      return [
          [a[0][0], a[1][0], a[2][0]],
          [a[0][1], a[1][1], a[2][1]],
          [a[0][2], a[1][2], a[2][2]]
        ]
    }
    
  }
  
  /*
   * @param a (array) matrix
   * @return (array)
   */
  size () {
    const a = this.matrix ? this.matrix : arguments[0]
    
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    if (a.length < 2 || a.length > 3) throw new Error("invalid total rows of array matrix")
    
    return [ a.length, a[0].length ]
  }
}

module.exports = Property