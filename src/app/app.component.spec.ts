import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { RenderHintComponent } from './render-hint/render-hint.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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

});
