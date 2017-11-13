import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlViewComponent } from './html-view.component';

describe('HtmlViewComponent', () => {
  let component: HtmlViewComponent;
  let fixture: ComponentFixture<HtmlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
