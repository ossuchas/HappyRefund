import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac03edit01PageComponent } from './ac03edit01-page.component';

describe('Ac03edit01PageComponent', () => {
  let component: Ac03edit01PageComponent;
  let fixture: ComponentFixture<Ac03edit01PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac03edit01PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac03edit01PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
