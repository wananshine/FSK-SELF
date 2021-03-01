import { PlayMode } from 'src/app/share/ui/player/player-type';
import { Song } from 'src/app/services/data-types/common.types';
import { createReducer, on, Action } from '@ngrx/store';
import { state } from '@angular/animations';
import { SetPlaying, SetPlayList, SetPlayMode, SetSongList, SetCurrentIndex } from '../actions/player.actions';

export type PlayState = {

    // 播放状态
    playing: boolean;

    // 播放模式
    playMode: PlayMode;

    // 歌曲列表
    songList: Song[];

    // 播放列表
    playList: Song[];

    // 当前正在播放的索引
    currentIndex: number;
}


export const initialState: PlayState = {
    playing: false,
    songList: [],
    playList: [],
    playMode: { type: 'loop', label: '循环' },
    currentIndex: -1
}

const reducer = createReducer(
    initialState,
    on(SetPlaying, (state, { playing }) => ({ ...state, playing })),
    on(SetPlayList, (state, { playList }) => ({ ...state, playList })),
    on(SetSongList, (state, { songList }) => ({ ...state, songList })),
    on(SetPlayMode, (state, { playMode }) => ({ ...state, playMode })),
    on(SetCurrentIndex, (state, { currentIndex }) => ({ ...state, currentIndex })),
);

export function playerReducer(state:PlayState, action:Action) { 
    return reducer(state, action)
}

// export const SetPlaying = createAction('[player] Set playing', props<{ playing: boolean }>());
// export const SetPlayList = createAction('[player] Set SetPlayList', props<{ playing: Song[] }>());
// export const SetSongList = createAction('[player] Set SetSongList', props<{ playing: Song[] }>());
// export const SetPlayMode = createAction('[player] Set SetPlayMode', props<{ mode: PlayMode }>());
// export const SetCurrentIndex = createAction('[player] Set SetCurrentIndex', props<{ index: number }>());
