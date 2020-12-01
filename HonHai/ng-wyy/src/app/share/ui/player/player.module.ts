import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { SliderModule } from './../slider/slider.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
  ],
  exports: [PlayerComponent]
})
export class PlayerModule { }
