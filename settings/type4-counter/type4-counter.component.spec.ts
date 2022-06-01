import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type4CounterComponent } from './type4-counter.component';

describe('Type4CounterComponent', () => {
  let component: Type4CounterComponent;
  let fixture: ComponentFixture<Type4CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type4CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type4CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
