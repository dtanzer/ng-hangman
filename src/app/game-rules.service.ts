import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameRulesService {
  private word: string = ''

  constructor() { }

  startNewGame(word: string) {
    this.word = word;
  }

  placeholder(): string[] {
    return this.word
      .split('')
      .map(c => '_')
  }
}
