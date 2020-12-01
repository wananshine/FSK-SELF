import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { SliderStyle } from '../slider-type/slider-types';

@Component({
  selector: 'app-slider-handle',
  template: `<div class="cur" [ngStyle]="style"><span class="btn"></span></div>`,
  styleUrls: ['./slider-handle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderHandleComponent implements OnInit, OnChanges {

  @Input() Vertical = false;
  @Input() Offset: number;

  style: SliderStyle = { };
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.Vertical);
    if (changes['Offset']) { 
      this.style[this.Vertical ? 'bottom' : 'width'] = this.Offset + '%';
    }
    // throw new Error('Method not implements')
  }

}
