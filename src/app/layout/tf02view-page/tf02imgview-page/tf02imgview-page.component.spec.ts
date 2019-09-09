import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf02imgviewPageComponent } from './tf02imgview-page.component';

describe('Tf02imgviewPageComponent', () => {
  let component: Tf02imgviewPageComponent;
  let fixture: ComponentFixture<Tf02imgviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tf02imgviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tf02imgviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
