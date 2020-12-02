import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GameRulesService } from '../game-rules.service';

import { RenderHintComponent } from './render-hint.component';

describe('RenderHintComponent', () => {
  let component: RenderHintComponent;
  let fixture: ComponentFixture<RenderHintComponent>;
  let gameRulesService: GameRulesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderHintComponent);
    component = fixture.componentInstance;
    gameRulesService = fixture.debugElement.injector.get(GameRulesService);
    fixture.detectChanges();
  });

  it('renders a hint with the correct length', (done) => {
    gameRulesService.startNewGame('test');
    component.ngOnChanges();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(fixture.debugElement.queryAll(By.css('.letter')).length).toBe(4);
      done();
    })
  });

  it('shows the correct placeholder character in each letter', (done) => {
    gameRulesService.startNewGame('test');
    component.ngOnChanges();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('.letter')).forEach(c => {
        expect(c.nativeElement.textContent).toEqual('_');
      })
      done();
    })
  });
});
