import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CregistrationComponent } from './cregistration.component';

describe('CregistrationComponent', () => {
  let component: CregistrationComponent;
  let fixture: ComponentFixture<CregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
