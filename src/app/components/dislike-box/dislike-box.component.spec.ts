import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeBoxComponent } from './dislike-box.component';

describe('DislikeBoxComponent', () => {
  let component: DislikeBoxComponent;
  let fixture: ComponentFixture<DislikeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
