import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { GameRulesService } from '../game-rules.service';

import { NewGameComponent } from './new-game.component';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;
  let gameRulesService: GameRulesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGameComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    gameRulesService = fixture.debugElement.injector.get(GameRulesService);
    fixture.detectChanges();
  });

  it('should show an input field to enter the word to guess', (done) => {
    fixture.whenStable().then(() => {
      const wordInput = fixture.debugElement.query(By.css('input[name="word"]'));
      expect(wordInput).toBeTruthy();
      expect(wordInput.nativeElement.type).toBe('text');
      done();
    });
  });

  it('should call new game on the game rules service when the form is submitted', (done) => {
    spyOn(gameRulesService, 'startNewGame');

    fixture.whenStable().then(() => {
      component.newGameForm?.controls.word.setValue('secret');
      fixture.debugElement.query(By.css('input[type="submit"]')).nativeElement.click();
      fixture.detectChanges();
      expect(gameRulesService.startNewGame).toHaveBeenCalledWith('secret');
      done()
    });
  })
});
