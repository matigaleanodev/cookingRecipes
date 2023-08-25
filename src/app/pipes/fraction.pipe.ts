import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction',
  standalone: true
})
export class FractionPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return '0';
    } else if (value < 1) {
      const gcd = this.calculateGCD(value);
      const numerator = Math.floor(value * gcd);
      const denominator = gcd;
      return `${numerator}/${denominator}`;
    } else if (value > 1 && value < 2) {
      const integerPart = Math.floor(value);
      const fractionalPart = value - integerPart;
      const gcd = this.calculateGCD(fractionalPart);
      const numerator = Math.floor(fractionalPart * gcd);
      const denominator = gcd;
      return `${integerPart} y ${numerator}/${denominator}`;
    } else {
      return Math.floor(value).toString();
    }
  }

  calculateGCD(value: number): number {
    const epsilon = 1e-10;
    let a = value;
    let b = 1;
    while (Math.abs(Math.round(a) - a) > epsilon) {
      a = 1 / (a - Math.floor(a));
      b = Math.floor(a) * b + 1;
    }
    return b;
  }
}