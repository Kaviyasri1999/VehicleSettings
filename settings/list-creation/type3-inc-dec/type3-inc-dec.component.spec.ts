import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Type3IncDecComponent } from './type3-inc-dec.component';

describe('Type3IncDecComponent', () => {
  let component: Type3IncDecComponent;
  let fixture: ComponentFixture<Type3IncDecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Type3IncDecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Type3IncDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
