// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides() {
    return this.sides.length
  }
  
  get perimeter() {
    return this.sides.reduce((perimeter, side) => perimeter + side)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false
    return this.sides[0] + this.sides[1] > this.sides[2] 
      && this.sides[0] + this.sides[2] > this.sides[1]
      && this.sides[1] + this.sides[2] > this.sides[0]
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false
    return this.sides[0] == this.sides[1] 
      && this.sides[1] == this.sides[2]
      && this.sides[2] == this.sides[3]
  }
  
  get area() {
    return this.sides[0] * this.sides[0]
  }
}

const res = new Triangle([3,2,2]).isValid
console.log(res)