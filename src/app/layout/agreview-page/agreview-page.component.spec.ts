import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreviewPageComponent } from './agreview-page.component';

describe('AgreviewPageComponent', () => {
  let component: AgreviewPageComponent;
  let fixture: ComponentFixture<AgreviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
