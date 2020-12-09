import { Component } from '@angular/core';
import { GameRulesService } from './game-rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangman';
  previousGuesses = '';

  constructor(private gameRulesService: GameRulesService) {}

  onKeyboardInput(e: KeyboardEvent) {
    if(e.key.length === 1 && e.key[0] >= 'a' && e.key[0] <= 'z') {
      this.gameRulesService.guess(e.key);
      this.previousGuesses += e.key;
    }
  }

  newGameCreated() {
    this.previousGuesses = '';
  }
}
