import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameRulesService } from '../game-rules.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  @ViewChild(NgForm) newGameForm?: NgForm;
  @Output() newGameCreated = new EventEmitter();
  word: string = '';
  
  constructor(private gameRulesService: GameRulesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.gameRulesService.startNewGame(this.word);
    this.newGameCreated.emit();
  }

}
