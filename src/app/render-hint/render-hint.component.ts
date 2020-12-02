import { Component, OnChanges, OnInit } from '@angular/core';
import { GameRulesService } from '../game-rules.service';

@Component({
  selector: 'app-render-hint',
  templateUrl: './render-hint.component.html',
  styleUrls: ['./render-hint.component.css']
})
export class RenderHintComponent implements OnInit, OnChanges {
  placeholder: string[] = ['*', '*', ]

  constructor(public gameRulesService: GameRulesService) { }

  ngOnInit(): void {
    this.placeholder = this.gameRulesService.placeholder()
  }

  ngOnChanges(): void {
    this.placeholder = this.gameRulesService.placeholder()
  }
}
