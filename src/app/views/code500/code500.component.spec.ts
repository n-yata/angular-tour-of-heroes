import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code500Component } from './code500.component';

describe('Code500Component', () => {
  let component: Code500Component;
  let fixture: ComponentFixture<Code500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Code500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
