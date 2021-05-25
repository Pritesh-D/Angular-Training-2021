import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductserviceformComponent } from './productserviceform.component';

describe('ProductserviceformComponent', () => {
  let component: ProductserviceformComponent;
  let fixture: ComponentFixture<ProductserviceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductserviceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductserviceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
