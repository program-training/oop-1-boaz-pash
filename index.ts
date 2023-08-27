//  1. Rectangle;
// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }
// const rectangle = new Rectangle(2, 4);
// console.log(rectangle.area());

//  2. Square;
// class Square extends Rectangle {
//   long: number;
//   constructor(long: number) {
//     super(long, long);
//     this.long = long;
//   }
// }
// const square = new Square(4);
// console.log(square.area());

// 3. Shape;
class Shape {
  constructor() {}
  info(): string {
    return "This is a Shape";
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  info(): string {
    return "This is Rectangle";
  }
}

class ColoredRectangle extends Rectangle {
  color: string;
  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  info(): string {
    return `This is a ${this.color} Rectangle`;
  }
}
const rectangle = new ColoredRectangle(2, 4,"red");
console.log(rectangle.area());
console.log(rectangle.info());

// 4. Method Chaining

// 5. Shape with draw method
