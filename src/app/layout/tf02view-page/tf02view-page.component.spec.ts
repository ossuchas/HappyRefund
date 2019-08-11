import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf02viewPageComponent } from './tf02view-page.component';

describe('Tf02viewPageComponent', () => {
  let component: Tf02viewPageComponent;
  let fixture: ComponentFixture<Tf02viewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tf02viewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tf02viewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
