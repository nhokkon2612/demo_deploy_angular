import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateingBarComponentComponent } from './rateing-bar-component.component';

describe('RateingBarComponentComponent', () => {
  let component: RateingBarComponentComponent;
  let fixture: ComponentFixture<RateingBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateingBarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateingBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
