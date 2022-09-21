import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfooterComponent } from './listfooter.component';

describe('ListfooterComponent', () => {
  let component: ListfooterComponent;
  let fixture: ComponentFixture<ListfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
