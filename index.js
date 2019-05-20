// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return (this.radius * this.radius) * Math.PI;
  }

  set diameter(newDia) {
    this.radius = newDia/2;
  }

  set circumference(newCir) {
    this.diameter = newCir/Math.PI;
  }

  set area(newArea) {
    rthis.radius = Math.Sqrt(newArea/Math.PI)
  }

}
