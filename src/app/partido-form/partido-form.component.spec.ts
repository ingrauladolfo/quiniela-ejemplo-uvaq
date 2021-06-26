import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoFormComponent } from './partido-form.component';

describe('PartidoFormComponent', () => {
  let component: PartidoFormComponent;
  let fixture: ComponentFixture<PartidoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
