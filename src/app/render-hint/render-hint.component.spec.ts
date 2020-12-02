import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderHintComponent } from './render-hint.component';

describe('RenderHintComponent', () => {
  let component: RenderHintComponent;
  let fixture: ComponentFixture<RenderHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
