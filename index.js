 class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length;
  }
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    let sum = 0
    for (let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i]
    }
    return sum
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.count === 3) {
      let sideA = this.sides[0]
      let sideB = this.sides[1]
      let sideC = this.sides[2]
      if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
        { return true } else { return false }
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid(){
    if (this.count === 4) {
      let sideA = this.sides[0]
      let sideB = this.sides[1]
      let sideC = this.sides[2]
      let sideD = this.sides[3]
      if ((sideA === sideB) && (sideB === sideC) && (sideC === sideD))
        { return true } else { return false }
    } else {
      return false
    }
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
}