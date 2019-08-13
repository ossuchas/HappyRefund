import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac01edit01PageComponent } from './ac01edit01-page.component';

describe('Ac01edit01PageComponent', () => {
  let component: Ac01edit01PageComponent;
  let fixture: ComponentFixture<Ac01edit01PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac01edit01PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac01edit01PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
