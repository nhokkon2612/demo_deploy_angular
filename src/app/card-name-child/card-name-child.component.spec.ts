import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNameChildComponent } from './card-name-child.component';

describe('CardNameChildComponent', () => {
  let component: CardNameChildComponent;
  let fixture: ComponentFixture<CardNameChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNameChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNameChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
