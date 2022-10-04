const Matrix = require("./Matrix")

class Vector {
  /*
   * @param (object) destructuring i, j, k
   * @return (array) vector
   */
  generate (args) {
    let { i = 0, j = 0, k = 0 } = args
    return [
        [i],
        [j],
        [k]
      ]
  }
  
  /*
   * @param str (string)
   * @return (array) vector
   */
  destruct () {
    const str = arguments[0] ? arguments[0] : ""
    if (typeof str !== "string") throw new Error(`argument must be string, but ${ typeof str } given`)
    
    let result = []
    let exp = /(\i|\j|\k)/g
    let operate = /(\+|\-)/g

    let arr = str.split(" ")
    
    arr.forEach((item, i) => {
      let res = Number(item.replace(exp, ""))
      res = res > 0 ? res : 1
      if (arr[i - 1]) {
        if (operate.test(arr[i - 1])) {
          res = eval(`${ arr[i - 1] }${ res }`)
        }
      }
      if (item !== "" && exp.test(item)) {
        result.push([res])
      }
    })
    
    return result
  }
  
  /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (object)
   */
  cross () {
    let a, b
    let m = []
    if (!this.matrix) {
      a = arguments[0] ? arguments[0] : []
      b = arguments[1] ? arguments[1] : []
    } else {
      a = this.matrix
      b = arguments[0] ? arguments[0] : []
    }
    
    m[0] = a.map((item) => item)
    m[1] = b.map((item) => item)
    
    let i = new Matrix([
        [m[0][1], m[0][2]],
        [m[1][1], m[1][2]]
      ]).det2D()
    
    let j = new Matrix([
        [m[0][0], m[0][2]],
        [m[1][0], m[1][2]]
      ]).det2D()
    
    let k = new Matrix([
        [m[0][0], m[0][1]],
        [m[1][0], m[1][1]]
      ]).det2D()
    
    const str = `${ i < 0 ? "-" : "" } ${ i < 0 ? i * -1 : i }i ${ j < 0 ? "+" : "-" } ${ j < 0 ? j * -1 : j }j ${ k < 0 ? "-" : "+" } ${ k < 0 ? k * -1 : k }k`
    
    return {
      string: str,
      matrix: this.destruct(str)
    }
  }
  
   /*
   * @param a (array) matrix
   * @param b (array) matrix
   * @return (number) degree
   */
  angle () {
    let a = arguments[0] ? arguments[0] : []
    let b = arguments[1] ? arguments[1] : []
    
    if ( a.length !== b.length || a.filter((pre, curr) => pre.length === curr.length) === b.filter((pre, curr) => pre.length === curr.length) ) throw new Error(`matrix must have same row and column!`)
    
    let result = new Matrix(a).dot(b) / ( new Matrix(a).length() * new Matrix(b).length() )
    let degree = Math.acos(result) * 180 / Math.PI
    
    return degree.toFixed()
  }
}

module.exports = Vector