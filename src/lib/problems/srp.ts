export type Shape = Square | Circle;

export class Square {
  constructor(public length: number) {}
}

export class Circle {
  constructor(public radius: number) {}
}

class AreaCalculator {
  constructor(private shapes: Shape[]) {}

  public sum() {
    let areaSum = 0;
    this.shapes.forEach((shape) => {
      if (shape instanceof Square) {
        areaSum += Math.pow(shape.length, 2);
      } else {
        areaSum += Math.PI * Math.pow(shape.radius, 2);
      }
    });

    return areaSum;
  }

  public output() {
    return `Sum of the areas of provided shapes: ${this.sum()}`;
  }
}
