import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsNewComponent } from './pets-new.component';

describe('PetsNewComponent', () => {
  let component: PetsNewComponent;
  let fixture: ComponentFixture<PetsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
