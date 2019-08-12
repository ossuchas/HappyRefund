import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac01viewPageComponent } from './ac01view-page.component';

describe('Ac01viewPageComponent', () => {
  let component: Ac01viewPageComponent;
  let fixture: ComponentFixture<Ac01viewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac01viewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac01viewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
