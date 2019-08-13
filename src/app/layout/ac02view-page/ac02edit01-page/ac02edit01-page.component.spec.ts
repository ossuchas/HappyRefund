import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac02edit01PageComponent } from './ac02edit01-page.component';

describe('Ac02edit01PageComponent', () => {
  let component: Ac02edit01PageComponent;
  let fixture: ComponentFixture<Ac02edit01PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac02edit01PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac02edit01PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
