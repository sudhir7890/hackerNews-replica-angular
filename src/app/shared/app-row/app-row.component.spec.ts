import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRowComponent } from './app-row.component';

describe('AppRowComponent', () => {
  let component: AppRowComponent;
  let fixture: ComponentFixture<AppRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
