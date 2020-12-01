import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongSheet, Song } from './data-types/common.types';
import { map, pluck, switchMap } from 'rxjs/internal/operators';
import { SongService } from './song.service';


@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string,
    private songService: SongService
  ) { }

  getSongSheetDetail(id: number): Observable<SongSheet>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.url + 'playlist/detail', { params })
    .pipe(map((res: { playlist: SongSheet })=> res.playlist))
  }

  playSheet(id: number): Observable<Song[]> { 
    return this.getSongSheetDetail(id).pipe(pluck('tracks'), switchMap(tracks => this.songService.getSongList(tracks)));
  }

}

