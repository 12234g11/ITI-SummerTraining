class Polygon {
  constructor(name) {
    this.name = name;
  }

  getArea() {

    }

  toString() {
    return this.name + " - Area: " + this.getArea();
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return this.name + " (width: " + this.width + ", height: " + this.height + ") - Area: " + this.getArea();
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = "Square";
  }

  toString() {
    return this.name + " (side: " + this.width + ") - Area: " + this.getArea();
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  toString() {
    return this.name + " (radius: " + this.radius + ") - Area: " + this.getArea().toFixed(2);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return this.name + " (base: " + this.base + ", height: " + this.height + ") - Area: " + this.getArea();
  }
}

const r = new Rectangle(10, 5);
const s = new Square(4);
const c = new Circle(3);
const t = new Triangle(6, 4);

console.log(r.toString());
console.log(s.toString());
console.log(c.toString());
console.log(t.toString());