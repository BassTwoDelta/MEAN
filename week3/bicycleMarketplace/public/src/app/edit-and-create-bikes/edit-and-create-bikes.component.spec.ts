import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndCreateBikesComponent } from './edit-and-create-bikes.component';

describe('EditAndCreateBikesComponent', () => {
  let component: EditAndCreateBikesComponent;
  let fixture: ComponentFixture<EditAndCreateBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAndCreateBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAndCreateBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
