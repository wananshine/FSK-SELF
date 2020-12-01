import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { SliderStyle } from '../slider-type/slider-types';

@Component({
  selector: 'app-slider-track',
  template: `<div class="rdy" [ngStyle]="style"></div>`,
  styleUrls: ['./slider-track.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderTrackComponent implements OnInit, OnChanges {

  @Input() Vertical = false;
  @Input() Length: number;

  style:SliderStyle = {};
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if (changes['Length']) { 
      if (this.Vertical) { 
        // this.style.height = this.Length + '%';
      }
    }
  }

}
