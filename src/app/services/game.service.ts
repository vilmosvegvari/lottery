import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  constructor() {}

  generateNumbers(howMany: number): number[] {
    const result: number[] = [];
    while (result.length < howMany) {
      const number = Math.floor(Math.random() * 49) + 1;
      // we only add unique numbers
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    // we can sort if we want
    return result;
  }
}
