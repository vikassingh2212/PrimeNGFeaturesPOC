import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingWithFilterComponent } from './lazyloading-with-filter.component';

describe('LazyloadingWithFilterComponent', () => {
  let component: LazyloadingWithFilterComponent;
  let fixture: ComponentFixture<LazyloadingWithFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadingWithFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
