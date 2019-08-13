import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tf02edit01PageComponent } from './tf02edit01-page.component';

describe('Tf02edit01PageComponent', () => {
  let component: Tf02edit01PageComponent;
  let fixture: ComponentFixture<Tf02edit01PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tf02edit01PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tf02edit01PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
