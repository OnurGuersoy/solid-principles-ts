import { Shape, Square } from '../problems/srp';

class SRPAreaCalculator {
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
}

export class AreaCalculatorOutputter {
  constructor(private calculator: SRPAreaCalculator) {}

  public JSON() {
    const data = { sum: this.calculator.sum() };
    return JSON.stringify(data);
  }

  public HTML() {
    return `<div>${this.calculator.sum()}</div>`;
  }
}
