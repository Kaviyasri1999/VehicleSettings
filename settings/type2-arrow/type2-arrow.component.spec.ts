import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2ArrowComponent } from './type2-arrow.component';

describe('Type2ArrowComponent', () => {
  let component: Type2ArrowComponent;
  let fixture: ComponentFixture<Type2ArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type2ArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type2ArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
