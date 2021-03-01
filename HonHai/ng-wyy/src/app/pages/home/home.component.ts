import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { HomeService } from "src/app/services/home.service";
import { SingerService } from "src/app/services/singer.service";
import { SheetService } from 'src/app/services/sheet.service';
import { Banner, HotTag, SongSheet, Singer } from "../../services/data-types/common.types";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { AppStoreModule } from 'src/app/store/store.module';
import { Store } from '@ngrx/store';
import { SetSongList, SetPlayList, SetCurrentIndex } from 'src/app/store/actions/player.actions';

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
    private route: ActivatedRoute,
    private sheetService: SheetService,
    private store$: Store<AppStoreModule>
  ) {

    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTag, songSheetList, singers]) => { 
      this.banners = banners;
      this.tags = hotTag;
      this.sheets = songSheetList;
      this.singers = singers;
    });
  }

  ngOnInit(): void { }
  
  computed(value: number): number | string{ 
    if (value > 10000) { 
      return Math.floor(value / 10000) + '万'
    } else { 
      return value;
    }
  }


  onPlaySheet(id: number) {
    console.log(id);
    this.sheetService.playSheet(id).subscribe(list => { 
      this.store$.dispatch(SetSongList({ songList: list }));
      this.store$.dispatch(SetPlayList({ playList: list }));
      this.store$.dispatch(SetCurrentIndex({ currentIndex: 0 }));
    })
  }

}
