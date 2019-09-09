import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa00viewPageComponent } from './aa00view-page.component';

describe('Aa00viewPageComponent', () => {
  let component: Aa00viewPageComponent;
  let fixture: ComponentFixture<Aa00viewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa00viewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa00viewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
