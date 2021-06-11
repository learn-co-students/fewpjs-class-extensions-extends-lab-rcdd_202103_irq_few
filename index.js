// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    const s1 = this.sides[0]
    const s2 = this.sides[1]
    const s3 = this.sides[2]
    return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    const s1 = this.sides[0]
    const s2 = this.sides[1]
    const s3 = this.sides[2]
    const s4 = this.sides[3]
    return ((s1 === s2) && (s1 === s3) && (s1 === s4))
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}