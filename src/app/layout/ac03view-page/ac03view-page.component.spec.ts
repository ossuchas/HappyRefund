import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac03viewPageComponent } from './ac03view-page.component';

describe('Ac03viewPageComponent', () => {
  let component: Ac03viewPageComponent;
  let fixture: ComponentFixture<Ac03viewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac03viewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac03viewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
