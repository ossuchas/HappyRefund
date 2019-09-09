import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac01imgviewPageComponent } from './ac01imgview-page.component';

describe('Ac01imgviewPageComponent', () => {
  let component: Ac01imgviewPageComponent;
  let fixture: ComponentFixture<Ac01imgviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac01imgviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac01imgviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
