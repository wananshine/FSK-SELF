import $$ from 'cmn-utils';
import modelEnhance from '../utils/modelEnhance';

export default modelEnhance({
  namespace: 'global',

  state: {
    menu: [],
    flatMenu: [],
  },

  effects: {
    *getMenu({ payload }, { call, put }) {

    },
    *delect({ payload }, { call, put, select }){

    }
  },

  reducers: {
    getMenuSuccess(state, { payload }) {}
  },
});
