import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponentComponent } from './browse-component.component';

describe('BrowseComponentComponent', () => {
  let component: BrowseComponentComponent;
  let fixture: ComponentFixture<BrowseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
