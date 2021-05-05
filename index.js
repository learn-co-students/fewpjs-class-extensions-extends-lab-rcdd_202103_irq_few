// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.countSides; i++) {
      let side = this.sides[i];
      sum += side;
    }
    return sum
  }

}

class Triangle extends Polygon {

  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (this.countSides !== 3) {
      return;
    }
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
  }

}

class Square extends Polygon {

  get area() {
    if (this.isValid) {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      return side1 * side2
    }
  }

  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    if (this.countSides !== 4) {
      return;
    }
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) && ( side3 === side4 ) )
  }

}