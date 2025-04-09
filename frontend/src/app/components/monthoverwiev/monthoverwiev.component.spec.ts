import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthoverwievComponent } from './monthoverwiev.component';

describe('MonthoverwievComponent', () => {
  let component: MonthoverwievComponent;
  let fixture: ComponentFixture<MonthoverwievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthoverwievComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthoverwievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
