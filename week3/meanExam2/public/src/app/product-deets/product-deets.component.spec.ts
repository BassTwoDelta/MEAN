import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeetsComponent } from './product-deets.component';

describe('ProductDeetsComponent', () => {
  let component: ProductDeetsComponent;
  let fixture: ComponentFixture<ProductDeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
