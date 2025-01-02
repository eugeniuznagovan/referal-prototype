import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalStatusComponent } from './referal-status.component';

describe('ReferalStatusComponent', () => {
  let component: ReferalStatusComponent;
  let fixture: ComponentFixture<ReferalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferalStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
