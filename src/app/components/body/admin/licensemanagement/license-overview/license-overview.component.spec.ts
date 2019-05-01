import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseOverviewComponent } from './license-overview.component';

describe('LicenseOverviewComponent', () => {
  let component: LicenseOverviewComponent;
  let fixture: ComponentFixture<LicenseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
