// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius
  }

  get area() {
    return Math.PI * (Math.pow(this.radius, 2))
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circ) {
    this.radius = (circ / Math.PI) / 2;
  }
}
