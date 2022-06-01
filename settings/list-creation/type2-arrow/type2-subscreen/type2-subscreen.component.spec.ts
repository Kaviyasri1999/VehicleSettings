import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2SubscreenComponent } from './type2-subscreen.component';

describe('Type2SubscreenComponent', () => {
  let component: Type2SubscreenComponent;
  let fixture: ComponentFixture<Type2SubscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type2SubscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type2SubscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
