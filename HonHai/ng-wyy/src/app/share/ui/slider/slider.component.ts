import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef, Input, Inject, ChangeDetectorRef, OnDestroy, forwardRef } from '@angular/core';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { filter, tap, pluck, map, distinctUntilChanged, takeUntil } from 'rxjs/internal/operators';
import { SliderEventObserverConfig, SliderValue } from '../slider-type/slider-types';
import { DOCUMENT } from '@angular/common';
import { sliderEvent, getElementOffset } from '../slider-helper/slider-helper';
import { inArray } from 'src/app/utils/array';
import { limitNumberInRange, getPercent } from 'src/app/utils/number';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  encapsulation: ViewEncapsulation.None,  //使样式在其他组件生效
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
  }]
})
export class SliderComponent implements OnInit, OnDestroy {

  @Input() Vertical = false;
  @Input() Min = 0;
  @Input() Max = 100;

  private sliderDom: HTMLDivElement;

  @ViewChild('Slider', { static: true }) private Slider: ElementRef;

  private dragStart$: Observable<number>;
  private dragMove$: Observable<number>;
  private dragEnd$: Observable<Event>;
  private dragStart_: Subscription | null;
  private dragMove_: Subscription | null;
  private dragEnd_: Subscription | null;

  private isDragging = false;

  value: SliderValue = null;
  offset: SliderValue = null;

  constructor(@Inject(DOCUMENT) private doc: Document, private cdr: ChangeDetectorRef,private el:ElementRef) { }

  ngOnInit(): void {
    // console.log('el:', this.Slider.nativeElement, this.el.nativeElement);
    this.sliderDom = this.Slider.nativeElement;
    this.createDraggingObservables();
    this.subscribeDrag(['start'])
  }

  // 
  private createDraggingObservables() { 
    const orientField = this.Vertical ? 'pageY' : 'pageX';
    const mouse: SliderEventObserverConfig = {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup',
      filter: (e: MouseEvent) => e instanceof MouseEvent,
      pluckKey: [orientField]
    };

    const touch: SliderEventObserverConfig = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      filter: (e: TouchEvent) => e instanceof TouchEvent,
      pluckKey: ['touches', '0', orientField]
    };

    [mouse, touch].forEach(source => {
      const { start, move, end, filter: filterFunc, pluckKey } = source;
      
      source.startPlucked$ = fromEvent(this.sliderDom, start)
      .pipe(
        filter(filterFunc),
        tap(sliderEvent),
        pluck(...pluckKey),
        map((position: number)=> this.findClosestValue(position))
      )

      source.end$ = fromEvent(this.doc, end);

      source.moveResolved$ = fromEvent(this.doc, move)
        .pipe(
          filter(filterFunc),
          tap(sliderEvent),
          pluck(...pluckKey),
          distinctUntilChanged(),
          map((position: number) => this.findClosestValue(position)),
          takeUntil(source.end$)
        );

    });

    this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = merge(mouse.end$, touch.end$);

  }

  // 
  private subscribeDrag(events: string[] = ['start', 'move', 'end']) {
    if (inArray(events, 'start') && this.dragStart$  && !this.dragStart_) { 
      this.dragStart_ =  this.dragStart$.subscribe(this.onDragStart.bind(this))
    }
    if (inArray(events, 'move') && this.dragMove$ && !this.dragMove_) { 
      this.dragMove_ =  this.dragMove$.subscribe(this.onDragMove.bind(this))
    }
    if (inArray(events, 'end') && this.dragEnd$  && !this.dragEnd_) { 
      this.dragEnd_ =  this.dragEnd$.subscribe(this.onDragEnd.bind(this))
    }
  }

  // 
  private unsubscribeDrag(events: string[] = ['start', 'move', 'end']) {
    if (inArray(events, 'start') && this.dragStart_) { 
      this.dragStart_.unsubscribe();
      this.dragStart_ = null;
    }
    if (inArray(events, 'move') && this.dragMove_) { 
      this.dragMove_.unsubscribe();
      this.dragMove_ = null;
    }
    if (inArray(events, 'end') && this.dragEnd_) { 
      this.dragEnd_.unsubscribe();
      this.dragEnd_ = null;
    }
  }

  // 
  private onDragStart(value: number) { 
    this.toggleDragMoving(true);
    console.log('onDragStart:',value)
    this.setValue(value);
  }

  // 
  private onDragMove(value: number) { 
    console.log(value)
    if (this.isDragging) { 
      this.setValue(value);
      this.cdr.markForCheck();
    }
  }

  // 
  private onDragEnd(value: number) { 
    this.toggleDragMoving(false);
    this.cdr.markForCheck();
  }

  // 
  private setValue(value: SliderValue, needCheck = false) { 
    if (needCheck) { 
      if (this.isDragging) { return; }
      this.value = this.formatValue(value);
      this.updateTrackAndHandles();
    }else if (!this.valuesEqual(this.value, value)) { 
      this.value = value;
      this.updateTrackAndHandles();
      this.onValueChange(this.value);
    }
    
  }

  //
  private formatValue(value: SliderValue): SliderValue { 
    let res = value;
    if (this.assertValueValid(value)) {
      res = this.Min;
    } else { 
      res = limitNumberInRange(value, this.Min, this.Max);
    }
    return res;
  }

  //判断是否NAN
  private assertValueValid(value: SliderValue): boolean { 
    return isNaN(typeof value !== 'number' ? parseFloat(value) : value);
  }

  //
  private valuesEqual(valA: SliderValue, valB: SliderValue): boolean { 
    if (typeof valA !== typeof valB) {
      return false;
    }
    return valA === valB;
  }

  // 
  private updateTrackAndHandles() { 
    this.offset = this.getValueToOffset(this.value);
    this.cdr.markForCheck();
  }

  // 
  private getValueToOffset(value: SliderValue): SliderValue { 
    return getPercent(this.Min, this.Max, value);
  }

  // 
  private toggleDragMoving(movable: boolean) { 
    this.isDragging = movable;
    if (movable) {
      this.subscribeDrag(['move', 'end']);
    } else { 
      this.unsubscribeDrag(['move', 'end']);
    }
  }

  // 
  private findClosestValue(position: number): number { 

    //获取滑块总长
    const sliderLength = this.getSliderLength();

    //获取滑块端点位置
    const sliderStart = this.getSliderStartPosition();

    // 滑块当前位置 / 滑块总长
    const ratio = limitNumberInRange((position - sliderStart) / sliderLength, 0, 1);
    const ratioTrue = this.Vertical ? 1 - ratio : ratio;
    console.log('ratio:',ratio, position);
    return ratioTrue * (this.Max - this.Min) + this.Min;
  }

  // 
  private getSliderLength(): number { 
    return this.Vertical ? this.sliderDom.clientHeight : this.sliderDom.clientWidth;
  }

  // 
  private getSliderStartPosition(): number { 
    const offset = getElementOffset(this.sliderDom);
    return this.Vertical ? offset.top : offset.left;
  }

  //
  private onValueChange(value: SliderValue): void { }

  //
  private onTouched(): void { }

  //
  writeValue(value: SliderValue): void { 
    this.setValue(value);
  }

  //
  registerOnChange(fn: any): void { 
    this.onValueChange = fn;
  }

  //
  registerOnTouched(fn: any): void { 
    this.onTouched = fn;
  }


  ngOnDestroy(): void { 
    this.unsubscribeDrag();
  }

}
