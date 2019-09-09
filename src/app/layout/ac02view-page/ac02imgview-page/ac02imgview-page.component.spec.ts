import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac02imgviewPageComponent } from './ac02imgview-page.component';

describe('Ac02imgviewPageComponent', () => {
  let component: Ac02imgviewPageComponent;
  let fixture: ComponentFixture<Ac02imgviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac02imgviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac02imgviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
