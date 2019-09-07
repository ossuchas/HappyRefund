import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgimgviewPageComponent } from './agimgview-page.component';

describe('AgimgviewPageComponent', () => {
  let component: AgimgviewPageComponent;
  let fixture: ComponentFixture<AgimgviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgimgviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgimgviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
