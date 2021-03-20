import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewProductComponent } from './request-new-product.component';

describe('RequestNewProductComponent', () => {
  let component: RequestNewProductComponent;
  let fixture: ComponentFixture<RequestNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
