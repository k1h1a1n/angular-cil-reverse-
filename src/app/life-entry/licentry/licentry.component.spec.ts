import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LICEntryComponent } from './licentry.component';

describe('LICEntryComponent', () => {
  let component: LICEntryComponent;
  let fixture: ComponentFixture<LICEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LICEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LICEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
