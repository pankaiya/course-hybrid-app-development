import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbucontentComponent } from './tongbucontent.component';

describe('TongbucontentComponent', () => {
  let component: TongbucontentComponent;
  let fixture: ComponentFixture<TongbucontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbucontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbucontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
