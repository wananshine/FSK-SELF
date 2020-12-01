import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from "src/app/share/share.module";
import { HomeComponent } from "./home.component";
import { CarouselComponent } from './carousel/carousel.component';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, MemberCardComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }
