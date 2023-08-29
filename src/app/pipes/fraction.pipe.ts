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
      // Verificar si el valor es una de las fracciones deseadas
      const fractions = [1/2, 1/3, 1/4, 1/5];
      const matchingFraction = fractions.find(fraction => Math.abs(value - fraction) < 0.01);

      if (matchingFraction) {
        // Si coincide con una fracción deseada, mostrarla como fracción
        return `${matchingFraction}`;
      } else {
        // De lo contrario, mostrar el valor original
        return value.toString();
      }
    } else if (value >= 1 && value < 2) {
      // Verificar si el valor es una de las fracciones deseadas
      const fractions = [1, 1/2, 1/3, 1/4, 1/5];
      const integerPart = Math.floor(value);
      const fractionalPart = value - integerPart;
      const matchingFraction = fractions.find(fraction => Math.abs(fractionalPart - fraction) < 0.01);

      if (matchingFraction) {
        // Si coincide con una fracción deseada, mostrarla como fracción
        return `${integerPart} y ${matchingFraction}`;
      } else {
        // De lo contrario, mostrar el valor original
        return value.toString();
      }
    } else {
      // Si es mayor o igual a 2, mostrar el valor original
      return value.toString();
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