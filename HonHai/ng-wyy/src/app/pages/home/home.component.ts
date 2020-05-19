import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { HomeService } from "src/app/services/home.service";
import { SingerService } from "src/app/services/singer.service";
import { Banner, HotTag, SongSheet, Singer } from "../../services/data-types/common.types";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { NzCarouselComponent } from 'ng-zorro-antd';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

// @Pipe({
//   name: 'playCount'
// })

// export class PlayCountPipe implements PipeTransform{
//   transform(value: number): number | string{
//     if(value > 10000){
//       return Math.floor(value / 100000) + '万'
//     }else{
//       return value
//     }
//   }
// }

export class HomeComponent implements OnInit {
  banners: Banner[];
  effect = 'scrollx';

  tags: HotTag[];
  sheets: SongSheet[];
  singers: Singer[]

  // @ViewChild(NzCarouselComponent, { static: true } private nzCarousel: NzCarouselComponent)
  
  constructor(
    private route: ActivatedRoute
  ) {

    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTag, songSheetList, singers]) => { 
      this.banners = banners;
      this.tags = hotTag;
      this.sheets = songSheetList;
      this.singers = singers;
    });
  }

  ngOnInit(): void {}

}
