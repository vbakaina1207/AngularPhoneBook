import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExtraComponent } from './child-extra.component';

describe('ChildExtraComponent', () => {
  let component: ChildExtraComponent;
  let fixture: ComponentFixture<ChildExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
