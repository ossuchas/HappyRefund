import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac02viewPageComponent } from './ac02view-page.component';

describe('Ac02viewPageComponent', () => {
  let component: Ac02viewPageComponent;
  let fixture: ComponentFixture<Ac02viewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac02viewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac02viewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
