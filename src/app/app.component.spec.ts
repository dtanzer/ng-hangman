import { not } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GameRulesService } from './game-rules.service';
import { NewGameComponent } from './new-game/new-game.component';
import { RenderHintComponent } from './render-hint/render-hint.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      declarations: [
        AppComponent,
        NewGameComponent,
        RenderHintComponent,
      ],
    }).compileComponents();
  });

  it('renders the "new-game" component', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(NewGameComponent))).toBeTruthy();
  });

  it('renders the "hint" component', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(RenderHintComponent))).toBeTruthy();
  })

  it('sends typed characters to the hangman service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const gameRulesService = fixture.debugElement.injector.get(GameRulesService);
    spyOn(gameRulesService, 'guess')
    fixture.detectChanges();

    const keyDownEvent = new KeyboardEvent('keydown', { key: 'a' });
    fixture.debugElement.query(By.css('.keyboard-input')).nativeElement.dispatchEvent(keyDownEvent);

    expect(gameRulesService.guess).toHaveBeenCalledWith('a')
  });

  const guesses: string[] = [ 'a', 'ab', 'tes', ]
  guesses.forEach(g => it(`prints all guessed letters from "${g}"`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    g.split('').forEach(letter => {
      const keyDownEvent = new KeyboardEvent('keydown', { key: letter });
      fixture.debugElement.query(By.css('.keyboard-input')).nativeElement.dispatchEvent(keyDownEvent);
      fixture.detectChanges();
    })

    expect(fixture.debugElement.query(By.css('.previous-guesses')).nativeElement.textContent).toContain(g);
  }));

  ['Alt', 'Z', '1', ].forEach(k => it(`does not pass special keys to the game rules service for key ${k}`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const gameRulesService = fixture.debugElement.injector.get(GameRulesService);
    spyOn(gameRulesService, 'guess');
    fixture.detectChanges();

    const keyDownEvent = new KeyboardEvent('keydown', { key: k, });
    fixture.debugElement.query(By.css('.keyboard-input')).nativeElement.dispatchEvent(keyDownEvent);

    expect(gameRulesService.guess).not.toHaveBeenCalled();
  }))

  it('clears the guessed letters when a new game is started', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const keyDownEvent = new KeyboardEvent('keydown', { key: 'z' });
    fixture.debugElement.query(By.css('.keyboard-input')).nativeElement.dispatchEvent(keyDownEvent);
    fixture.detectChanges();

    const newGame = fixture.debugElement.query(By.directive(NewGameComponent));
    newGame.componentInstance.newGameCreated.emit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.previous-guesses')).nativeElement.textContent).not.toContain('z');
  })
});
