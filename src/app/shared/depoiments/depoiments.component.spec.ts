import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentsComponent } from './depoiments.component';

describe('DepoimentsComponent', () => {
  let component: DepoimentsComponent;
  let fixture: ComponentFixture<DepoimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepoimentsComponent]
    });
    fixture = TestBed.createComponent(DepoimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
