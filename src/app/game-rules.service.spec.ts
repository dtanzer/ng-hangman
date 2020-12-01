import { TestBed } from '@angular/core/testing';

import { GameRulesService } from './game-rules.service';

describe('GameRulesService', () => {
  let service: GameRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRulesService);
  });

  const placeholders : [string, string][] = [ ['a', '_' ], [ 'the', '___' ], [ 'test', '____' ], ]
  placeholders.forEach(([word, placeholder]) => it(`creates the placeholder "${placeholder}" when word is "${word}" at the start of the game`, () => {
    service.startNewGame(word);
    expect(service.placeholder()).toEqual(placeholder.split(''));
  }));
});
