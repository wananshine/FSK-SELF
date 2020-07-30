import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface HomeModelState {
  name: string;
}
export interface HomeModelType {
  namespace: 'index';
  state: HomeModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HomeModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
const HomeModel: HomeModelType = {
  namespace: 'home',
  state: {
    name: '123',
  },
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};
export default HomeModel;