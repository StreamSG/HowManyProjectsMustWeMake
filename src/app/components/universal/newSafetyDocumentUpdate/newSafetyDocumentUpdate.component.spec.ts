/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewSafetyDocumentUpdateComponent } from './newSafetyDocumentUpdate.component';

describe('NewSafetyDocumentUpdateComponent', () => {
  let component: NewSafetyDocumentUpdateComponent;
  let fixture: ComponentFixture<NewSafetyDocumentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSafetyDocumentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
