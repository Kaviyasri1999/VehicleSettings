import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3SliderComponent } from './type3-slider.component';

describe('Type3SliderComponent', () => {
  let component: Type3SliderComponent;
  let fixture: ComponentFixture<Type3SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type3SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type3SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
