import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agedit01PageComponent } from './agedit01-page.component';

describe('Agedit01PageComponent', () => {
  let component: Agedit01PageComponent;
  let fixture: ComponentFixture<Agedit01PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agedit01PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agedit01PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
