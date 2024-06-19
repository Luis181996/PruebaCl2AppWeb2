import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo01Component } from './ejemplo01.component';

describe('Ejemplo01Component', () => {
  let component: Ejemplo01Component;
  let fixture: ComponentFixture<Ejemplo01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
