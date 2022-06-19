import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentsDisplayerComponent } from './sentiments-displayer.component';

describe('SentimentComponent', () => {
  let component: SentimentsDisplayerComponent;
  let fixture: ComponentFixture<SentimentsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentsDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
