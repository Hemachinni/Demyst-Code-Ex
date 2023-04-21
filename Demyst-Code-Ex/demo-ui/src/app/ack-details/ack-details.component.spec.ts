import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckDetailsComponent } from './ack-details.component';

describe('AckDetailsComponent', () => {
  let component: AckDetailsComponent;
  let fixture: ComponentFixture<AckDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
