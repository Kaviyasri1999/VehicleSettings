import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type1CheckboxComponent } from './type1-checkbox.component';

describe('Type1CheckboxComponent', () => {
  let component: Type1CheckboxComponent;
  let fixture: ComponentFixture<Type1CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type1CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type1CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
