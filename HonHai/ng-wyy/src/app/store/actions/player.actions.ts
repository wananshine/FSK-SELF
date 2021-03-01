import { createAction, props } from '@ngrx/store';
import { Song } from 'src/app/services/data-types/common.types';
import { PlayMode } from 'src/app/share/ui/player/player-type';

export const SetPlaying = createAction('[player] Set playing', props<{ playing: boolean }>());
export const SetPlayList = createAction('[player] Set SetPlayList', props<{ playList: Song[] }>());
export const SetSongList = createAction('[player] Set SetSongList', props<{ songList: Song[] }>());
export const SetPlayMode = createAction('[player] Set SetPlayMode', props<{ playMode: PlayMode }>());
export const SetCurrentIndex = createAction('[player] Set SetCurrentIndex', props<{ currentIndex: number }>());

