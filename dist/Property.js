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
  addition () {
    let a, b
    if (!this.matrix) {
      a = arguments[0] ? arguments[0] : []
      b = arguments[1] ? arguments[1] : []
    } else {
      a = this.matrix
      b = arguments[0] ? arguments[0] : []
    }
    
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
  subtraction () {
    let a, b
    if (!this.matrix) {
      a = arguments[0] ? arguments[0] : []
      b = arguments[1] ? arguments[1] : []
    } else {
      a = this.matrix
      b = arguments[0] ? arguments[0] : []
    }
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
  multiple () {
    let a, b
    if (!this.matrix) {
      a = arguments[0] ? arguments[0] : []
      b = arguments[1] ? arguments[1] : []
    } else {
      a = this.matrix
      b = arguments[0] ? arguments[0] : []
    }
    
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
  multipleX () {
    let any, m
    if (!this.matrix) {
      any = arguments[0] ? arguments[0] : 1
      m = arguments[1] ? arguments[1] : []
    } else {
      any = arguments[0] ? arguments[0] : 1
      m = this.matrix
    }
    
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
  dot () {
    let a, b
    if (!this.matrix) {
      a = arguments[0] ? arguments[0] : []
      b = arguments[1] ? arguments[1] : []
    } else {
      a = this.matrix
      b = arguments[0] ? arguments[0] : []
    }
    
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
  rows () {
    const a = this.matrix ? this.matrix : arguments[0]
    if ( !Array.isArray(a) ) throw new Error(`Argument must be Array '${ typeof a }' given`)
    
    return a.length
  }
  
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (number) degree
   */
  angle () {
    if (this.matrix) throw new Error("can't call this method inside a initialize matrix")
    let a = arguments[0] ? arguments[0] : []
    let b = arguments[1] ? arguments[1] : []
    
    if ( a.length !== b.length || a.filter((pre, curr) => pre.length === curr.length) === b.filter((pre, curr) => pre.length === curr.length) ) throw new Error(`matrix must have same row and column!`)
    
    let result = this.dot(a, b) / (this.length(a) * this.length(b))
    let degree = Math.acos(result) * 180 / Math.PI
    
    return degree.toFixed()
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