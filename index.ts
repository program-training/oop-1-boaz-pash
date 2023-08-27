// את הקוד שלכם תכתבו כאן
//  1. Rectangle
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(2, 4);
console.log(rectangle.area());

//  2. Square - ריבוע
class Square extends Rectangle {
  long: number;
  constructor(long: number) {
    super(long, long);
    this.long = long;
  }
}
const square = new Square(4);
console.log(square.area());

// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
